import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset};
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css");

html,
body {

  font-size: 62.5%;

  width: 100%;
  height: 100%;
  min-height: 100vw;
  /* max-width: 360px; */
}

#root {
  margin: 0 auto;
}

html {

  font-size: 62.5%;
  min-width: 320px;
}

* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box; 
}

body, button {
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

  /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, */
  /* Helvetica Neue, sans-serif; */
}

button {
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  -webkit-tap-highlight-color : transparent;
}

a, a:visited {
  text-decoration: none;
  color: black;
}
`;

export default GlobalStyle;
