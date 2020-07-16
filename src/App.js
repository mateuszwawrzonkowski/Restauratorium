import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/globalStyles';
import Button from 'components/Button/Button';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
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
