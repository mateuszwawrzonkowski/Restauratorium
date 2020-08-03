import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/globalStyles';
import { theme } from 'theme/mainTheme';
import Input from 'components/Input/Input';
import SelectionMenu from 'components/SelectionMenu/SelectionMenu';

const MainWrapper = styled.div`
   /* display: flex; */
   flex-direction: column;
   margin: 0 auto;
   width: 1165px;
   height: 100vh;
   background-color: black;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <MainWrapper>
            <Input />
            <SelectionMenu />
          </MainWrapper>
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
