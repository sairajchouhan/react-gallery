export const initialState = {
  results: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_DATA':
      return {
        results: [...action.payload],
      };
    default:
      return;
  }
};

export default reducer;
