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
