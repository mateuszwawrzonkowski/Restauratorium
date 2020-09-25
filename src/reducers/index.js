import { combineReducers } from 'redux';
import visibilityFilter from 'reducers/visibilityFilters';

const switchStatus = (status) => {
  switch (status) {
    case 'liked':
      return 'unvisited';
    case 'unvisited':
      return 'notliked';
    case 'notliked':
      return 'liked';
    default:
      return 'unvisited';
  }
};

const initialState = {
  cards: [
    {
      id: 0,
      name: 'Kura',
      link: 'https://www.facebook.com/restauracjakura',
      imageUrl: 'https://graph.facebook.com/restauracjakura/picture?type=large',
      description: 'Restaurant with the best chicken in the world',
      status: 'liked',
    },
    {
      id: 1,
      name: 'Ciao a tutti',
      link: 'https://www.facebook.com/ciaotuttipizza',
      imageUrl: 'https://graph.facebook.com/ciaotuttipizza/picture?type=large',
      description: 'Restaurant with pizza, medium prices',
      status: 'notliked',
    },
    {
      id: 2,
      name: 'Shuk',
      link: 'https://www.facebook.com/SHUK.grojecka107',
      imageUrl: 'https://graph.facebook.com/SHUK.grojecka107/picture?type=large',
      description: 'Restaurant with mezze',
      status: 'unvisited',
    },
    {
      id: 3,
      name: 'Bar Pacyfik',
      link: 'https://www.facebook.com/barpacyfik',
      imageUrl: 'https://graph.facebook.com/barpacyfik/picture?type=large',
      description: 'Coctails and food',
      status: 'liked',
    },
    {
      id: 4,
      name: 'Pumpui Thai Food',
      link: 'https://www.facebook.com/pumpuithaifood',
      imageUrl: 'https://graph.facebook.com/pumpuithaifood/picture?type=large',
      description: 'Authenthic thai food',
      status: 'liked',
    },
    {
      id: 5,
      name: 'Kura Warzywa',
      link: 'https://www.facebook.com/kurawarzywwarszawa',
      imageUrl: 'https://graph.facebook.com/kurawarzywwarszawa/picture?type=large',
      description: 'Gemuse kebab, medium price',
      status: 'notliked',
    },
    {
      id: 6,
      name: 'Casa Mia Pizza',
      link: 'https://www.facebook.com/casamiawarszawa',
      imageUrl: 'https://graph.facebook.com/casamiawarszawa/picture?type=large',
      description: 'Very good, neapolitan pizza, medium price',
      status: 'liked',
    },
    {
      id: 7,
      name: 'Belvedere',
      link: 'https://www.facebook.com/BelvedereLazienkiKrolewskie',
      imageUrl: 'https://graph.facebook.com/BelvedereLazienkiKrolewskie/picture?type=large',
      description: 'Restauracja Belvedere to jedno z najpiękniejszych i najbardziej oryginalnych miejsc na kulinarnej mapie Polski',
      status: 'liked',
    },
  ],
  value: 'k',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('ADD_CARD'):
      return {
        ...state,
        cards: [...state.cards,
          action.payload.card],
      };
    case ('REMOVE_CARD'):
      return {
        ...state,
        cards: state.cards.filter((item) => item.id !== action.payload.id),
      };
    // case ('SEARCH_CARD'):
    //   const names = state.cards.filter((item) =>
    //   (item.name.toLowerCase().includes(action.payload.value)));
    //   return {
    //     ...state,
    //     cards: [...state.cards,
    //       state.cards.filter((item) => (item.name.includes(action.payload.value)))],
    //   };
    case ('SEARCH_CARD'):
      return {
        ...state,
        value: action.value,
      };
    case ('CHANGE_STATUS'):
      return {
        ...state,
        cards: state.cards.map((item) => (item.id === action.payload.id
          ? { ...item, status: switchStatus(item.status) } : { ...item })),
      };
    default:
      return state;
  }
};

export default combineReducers({
  rootReducer,
  visibilityFilter,
});
