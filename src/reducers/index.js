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
      imageUrl: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93303605_513901102638363_4212623255288152064_o.jpg?_nc_cat=105&_nc_sid=e3f864&_nc_ohc=-DRgE2eLpfkAX8SBefh&_nc_ht=scontent-waw1-1.xx&oh=fa86242893857acbb5adf1bca458be26&oe=5F75F34F',
      description: 'Restaurant with the best chicken in the world',
      status: 'liked',
    },
    {
      id: 1,
      name: 'Ciao a tutti',
      link: 'https://www.facebook.com/ciaotuttipizza/',
      imageUrl: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/38406471_1779868078729023_5225533486084915200_n.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=ensq0sCewp4AX_DDLHA&_nc_ht=scontent-waw1-1.xx&oh=64a61d936696e9e23503bd61c353452d&oe=5F72E0BE',
      description: 'Restaurant with pizza, medium prices',
      status: 'notliked',
    },
    {
      id: 2,
      name: 'Shuk',
      link: 'https://www.facebook.com/SHUK.grojecka107/',
      imageUrl: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/13325687_1005646456137953_2742451417741964503_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=rJNMWA82bFcAX85q5jf&_nc_ht=scontent-waw1-1.xx&oh=d974bb5c0aad7382b6563587ae881c53&oe=5F75EA50',
      description: 'Restaurant with mezze',
      status: 'unvisited',
    },
    {
      id: 3,
      name: 'Bar Pacyfik',
      link: 'https://www.facebook.com/barpacyfik/',
      imageUrl: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/14925456_1835440693401041_3477011330285135777_n.png?_nc_cat=111&_nc_sid=85a577&_nc_ohc=-W8n73g2ZhIAX_CLyuX&_nc_ht=scontent-waw1-1.xx&oh=00a8a7fee39f42e4bfbe6761742507a4&oe=5F4EE578',
      description: 'Coctails and food',
      status: 'liked',
    },
    {
      id: 4,
      name: 'Pumpui Thai Food',
      link: 'https://www.facebook.com/pumpuithaifood/',
      imageUrl: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-0/p640x640/78599041_1434576980034521_1130728158752931840_o.jpg?_nc_cat=106&_nc_sid=dd9801&_nc_ohc=YkKIlLKBeB0AX84pgXQ&_nc_ht=scontent-waw1-1.xx&_nc_tp=6&oh=d560385a65f516b01f65dbac7216dd82&oe=5F4F00FB',
      description: 'Authenthic thai food',
      status: 'liked',
    },
    {
      id: 5,
      name: 'Kura Warzywa',
      link: 'https://www.facebook.com/kurawarzywwarszawa/',
      imageUrl: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93607298_844809556022626_8036294289430413312_n.png?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=qVyDkbDaUY0AX9wMfNN&_nc_ht=scontent-waw1-1.xx&oh=2cfbfb25568eef602f050f91df4fda65&oe=5F74EBF1',
      description: 'Gemuse kebab, medium price',
      status: 'notliked',
    },
    {
      id: 6,
      name: 'Kura Warzywa',
      link: 'https://www.facebook.com/kurawarzywwarszawa/',
      imageUrl: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93607298_844809556022626_8036294289430413312_n.png?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=qVyDkbDaUY0AX9wMfNN&_nc_ht=scontent-waw1-1.xx&oh=2cfbfb25568eef602f050f91df4fda65&oe=5F74EBF1',
      description: 'Gemuse kebab, medium price',
      status: 'notliked',
    },
    {
      id: 7,
      name: 'Pumpui Thai Food',
      link: 'https://www.facebook.com/pumpuithaifood/',
      imageUrl: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-0/p640x640/78599041_1434576980034521_1130728158752931840_o.jpg?_nc_cat=106&_nc_sid=dd9801&_nc_ohc=YkKIlLKBeB0AX84pgXQ&_nc_ht=scontent-waw1-1.xx&_nc_tp=6&oh=d560385a65f516b01f65dbac7216dd82&oe=5F4F00FB',
      description: 'Authenthic thai food',
      status: 'liked',
    },
  ],
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
    case ('SEARCH_CARD'):
      return {
        ...state,
        cards: state.cards.filter((item) => item.name.toLowerCase().includes(action.payload.value)),
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
