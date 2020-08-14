const initialState = {
  cards: [
    {
      id: 0,
      name: 'Kura',
      link: 'https://www.facebook.com/restauracjakura',
      imageUrl: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93303605_513901102638363_4212623255288152064_o.jpg?_nc_cat=105&_nc_sid=dd9801&_nc_ohc=fwxx1cdksp0AX-rV2em&_nc_ht=scontent-waw1-1.xx&oh=acb18bd9f16e722462af7d91f5ad5433&oe=5F3A9FCF',
      description: 'Restaurant with the best chicken in the world',
      status: 'liked',
    },
    {
      id: 1,
      name: 'Ciao a tutti',
      link: 'https://www.facebook.com/ciaotuttipizza/',
      imageUrl: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/117122611_3159910464058104_8421524699655713680_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=H0_Dup9MnXsAX-j8Ep0&_nc_ht=scontent-waw1-1.xx&oh=58468befe76b29eb5f8a44f055ede6ec&oe=5F4DBF00',
      description: 'Restaurant with pizza, medium prices',
      status: 'notliked',
    },
    {
      id: 2,
      name: 'Shuk',
      link: 'https://www.facebook.com/SHUK.grojecka107/',
      imageUrl: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/s960x960/44450375_1835341913168399_5316685031547076608_o.jpg?_nc_cat=109&_nc_sid=dd9801&_nc_ohc=Fq2TdhKqw9sAX8V-lMV&_nc_ht=scontent-waw1-1.xx&_nc_tp=7&oh=4b429b43dd34475b6875c84e3469592c&oe=5F4DC2F3',
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
      imageUrl: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93607298_844809556022626_8036294289430413312_n.png?_nc_cat=100&_nc_sid=85a577&_nc_ohc=5iZDn15N0sYAX_3clGD&_nc_ht=scontent-waw1-1.xx&oh=3793d4677bb46e9c8cb77d8113437daa&oe=5F4D5EF1',
      description: 'Gemuse kebab, medium price',
      status: 'notliked',
    },
    {
      id: 6,
      name: 'Kura Warzywa',
      link: 'https://www.facebook.com/kurawarzywwarszawa/',
      imageUrl: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/93607298_844809556022626_8036294289430413312_n.png?_nc_cat=100&_nc_sid=85a577&_nc_ohc=5iZDn15N0sYAX_3clGD&_nc_ht=scontent-waw1-1.xx&oh=3793d4677bb46e9c8cb77d8113437daa&oe=5F4D5EF1',
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
    default:
      return state;
  }
};

export default rootReducer;
