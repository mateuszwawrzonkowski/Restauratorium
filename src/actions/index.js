export const removeCard = (id) => ({
  type: 'REMOVE_CARD',
  payload: {
    id,
  },
});

export const addCard = (cardContent) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
  return {
    type: 'ADD_CARD',
    payload: {
      card: {
        id: getId(),
        ...cardContent,
      },
    },
  };
};

export const searchCard = (value) => ({
  type: 'SEARCH_CARD',
  value,
});

export const changeStatus = (id, status) => ({
  type: 'CHANGE_STATUS',
  payload: {
    id,
    status,
  },
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_LIKED: 'SHOW_LIKED',
  SHOW_UNVISITED: 'SHOW_UNVISITED',
  SHOW_NOTLIKED: 'SHOW_NOTLIKED',
  SHOW_SEARCHED: 'SHOW_SEARCHED',
};