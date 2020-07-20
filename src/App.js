import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/globalStyles';
import Button from 'components/Button/Button';
import { theme } from 'theme/mainTheme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Button>
            <span />
          </Button>
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
