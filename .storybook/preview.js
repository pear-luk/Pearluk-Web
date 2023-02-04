import * as NextImage from 'next/image';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/globalStyle';
import theme from '../src/styles/theme';
NextImage.defaultProps = {
  unoptimized: true,
};
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
};

const withGlobalStyle = (Story) => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Story />
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
};

export const decorators = [withGlobalStyle];
