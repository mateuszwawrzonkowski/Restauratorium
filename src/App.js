import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from 'store';
import GlobalStyle from 'theme/globalStyles';
import { theme } from 'theme/mainTheme';
import Input from 'components/Input/Input';
import SelectionMenu from 'components/SelectionMenu/SelectionMenu';
import RestaurantsCards from 'components/RestaurantsCards/RestaurantsCards';
import Modal from 'components/Modal/Modal';
import background from 'assets/background.png';
import Button from 'components/Button/Button';

const Background = styled.div`
   background: url(${background});
   background-size:cover;
   height:100vh;
`;

const MainWrapper = styled.div`
   margin: 0 auto;
   width: 1165px;
   max-height: 100vh;
   overflow: hidden;
`;

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <Background>
              <MainWrapper>
                <Input placeholder="search" />
                <SelectionMenu />
                <RestaurantsCards />
              </MainWrapper>
              <Button><span /></Button>
              <Modal />
            </Background>
          </>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
