import React, { useState, useMemo, useCallback } from 'react';
import { useToast } from '@chakra-ui/react';
import { useFormContext, Controller, useWatch } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { useAgentContext } from '~/context/AgentContext';
import { useAgentTools } from '~/hooks/useAgentTools';
import { useAgentCapabilities } from '~/hooks/useAgentCapabilities';
import { useAgentFiles } from '~/hooks/useAgentFiles';
import { useAgentPanelContext } from '~/context/AgentPanelContext';
import { useLocalize } from '~/hooks/useLocalize';
import AgentAvatar from './AgentAvatar';
import AgentCategorySelector from './AgentCategorySelector';
import AgentTool from './AgentTool';
import Artifacts from './Artifacts';
import CodeForm from './CodeForm';
import FileContext from './FileContext';
import FileSearch from './FileSearch';
import Instructions from './Instructions';
import ToolSelectDialog from './ToolSelectDialog';
import Action from './Action';
import SearchForm from './SearchForm';

export default function AgentConfig() {
  const localize = useLocalize();
  const toast = useToast();
  const { control, errors } = useFormContext();
  const { agent, agentId } = useAgentContext();
  const { tools, setTools } = useAgentTools();
  const { capabilities } = useAgentCapabilities();
  const { files } = useAgentFiles(agentId);
  const { setActivePanel } = useAgentPanelContext();

  // Insert logo above search form
  return (
    <>
      <div className="mb-4 flex justify-center bg-white bg-opacity-30 rounded-md p-2">
        <img
          src="/assets/t2m_mid.svg"
          alt="LibreChat Logo"
          className="w-full max-w-[200px] object-contain opacity-70"
        />
      </div>
      <SearchForm />
      {/* Rest of the component */}
    </>
  );
}
  