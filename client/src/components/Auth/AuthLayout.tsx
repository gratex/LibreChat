import { useContext } from 'react';
import { ThemeSelector, ThemeContext, isDark } from '@librechat/client';
import { TStartupConfig } from 'librechat-data-provider';
import { ErrorMessage } from '~/components/Auth/ErrorMessage';
import { TranslationKeys, useLocalize } from '~/hooks';
import SocialLoginRender from './SocialLoginRender';
import { BlinkAnimation } from './BlinkAnimation';
import { Banner } from '../Banners';
import Footer from './Footer';

function AuthLayout({
  children,
  header,
  isFetching,
  startupConfig,
  startupConfigError,
  pathname,
  error,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  isFetching: boolean;
  startupConfig: TStartupConfig | null | undefined;
  startupConfigError: unknown | null | undefined;
  pathname: string;
  error: TranslationKeys | null;
}) {
  const localize = useLocalize();
  const { theme } = useContext(ThemeContext);

  const hasStartupConfigError = startupConfigError !== null && startupConfigError !== undefined;
  const DisplayError = () => {
    if (hasStartupConfigError) {
      return (
        <div className="mx-auto sm:max-w-sm">
          <ErrorMessage>{localize('com_auth_error_login_server')}</ErrorMessage>
        </div>
      );
    } else if (error === 'com_auth_error_invalid_reset_token') {
      return (
        <div className="mx-auto sm:max-w-sm">
          <ErrorMessage>
            {localize('com_auth_error_invalid_reset_token')}{' '}
            <a className="font-semibold text-green-600 hover:underline" href="/forgot-password">
              {localize('com_auth_click_here')}
            </a>{' '}
            {localize('com_auth_to_try_again')}
          </ErrorMessage>
        </div>
      );
    } else if (error != null && error) {
      return (
        <div className="mx-auto sm:max-w-sm">
          <ErrorMessage>{localize(error)}</ErrorMessage>
        </div>
      );
    }
    return null;
  };

  // Determine which logo to use based on theme
  const logoSrc = isDark(theme) ? "/assets/logo_T2M_white.svg" : "/assets/logo_T2M.svg";

  return (
    <div className="relative flex min-h-screen flex-col bg-white dark:bg-surface-primary">
      <Banner />
      <BlinkAnimation active={isFetching}>
        <DisplayError />
        <div className="absolute bottom-0 left-0 md:m-4">
          <ThemeSelector />
        </div>

        <div className="flex flex-grow items-center justify-center">
          <div className="w-authPageWidth overflow-hidden bg-white px-6 py-4 dark:bg-surface-secondary sm:max-w-md sm:rounded-lg">
            {/* Logo above header, scales with form width */}
            <img
              src={logoSrc}
              style={{ width: '100%', height: 'auto', marginBottom: '1.5rem' }}
              alt={localize('com_ui_logo', { 0: startupConfig?.appTitle ?? 'Toss2Machine' })}
            />
            {!hasStartupConfigError && !isFetching && (
              <h1
                className="mb-4 text-center text-3xl font-semibold text-black dark:text-white"
                style={{ userSelect: 'none' }}
              >
                {header}
              </h1>
            )}
            {children}
            {!pathname.includes('2fa') &&
              (pathname.includes('login') || pathname.includes('register')) && (
                <SocialLoginRender startupConfig={startupConfig} />
              )}
          </div>
        </div>
        <Footer startupConfig={startupConfig} />
      </BlinkAnimation>
    </div>
  );
}

export default AuthLayout;
