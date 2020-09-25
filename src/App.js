import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from 'store';
import GlobalStyle from 'theme/globalStyles';
import { theme } from 'theme/mainTheme';
import SearchInput from 'components/Input/SearchInput';
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
  const [isShowing, setIsShowing] = useState(false);

  function toggleModal() {
    setIsShowing(!isShowing);
  }

  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <>
            <Background>
              <MainWrapper>
                <SearchInput />
                <SelectionMenu />
                <RestaurantsCards />
              </MainWrapper>
              <Button onClick={toggleModal}><span /></Button>
              <Modal isShowing={isShowing} toggle={toggleModal} />
            </Background>
          </>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
