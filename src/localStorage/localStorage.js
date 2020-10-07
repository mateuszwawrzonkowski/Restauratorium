export const loadState = () => {
  const serializedState = localStorage.getItem('reduxState');
  if (serializedState === null) {
    return undefined;
  }
  return JSON.parse(serializedState);
};

export const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('reduxState', serializedState);
};
