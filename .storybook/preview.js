import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/globalStyle';
import theme from '../src/styles/theme';
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

const withGlobalStyle = (Story) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  </>
);

export const decorators = [withGlobalStyle];
