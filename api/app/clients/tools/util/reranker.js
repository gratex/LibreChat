const { RerankerTypes } = require('librechat-data-provider');
const { logger } = require('~/config');

async function applyReranking(searchResults, webSearchConfig) {
  const { rerankerType, customRerankerUrl, customRerankerApiKey } = webSearchConfig;

  if (rerankerType === RerankerTypes.CUSTOM) {
    if (!customRerankerUrl) {
      logger.warn('Custom reranker URL is not provided. Skipping custom reranking.');
      return searchResults;
    }

    try {
      const response = await fetch(customRerankerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(customRerankerApiKey && { 'x-api-key': customRerankerApiKey }),
        },
        body: JSON.stringify({ results: searchResults }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        logger.error(`Custom reranker API error: ${response.status} - ${errorText}`);
        return searchResults; // Return original results on API error
      }

      const rerankedResults = await response.json();
      // Assuming the rerankedResults structure is compatible with searchResults
      return rerankedResults;
    } catch (error) {
      logger.error('Error calling custom reranker API:', error);
      return searchResults; // Return original results on network/other error
    }
  }

  // For other reranker types (JINA, COHERE), or if no reranker is specified, return original results
  return searchResults;
}

module.exports = {
  applyReranking,
};