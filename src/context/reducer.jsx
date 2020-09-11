export const initialState = {
  results: [],
  photos: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_DATA':
      return {
        results: [...action.payload],
        photos: [...state.photos],
      };
    case 'ADD_IMAGES':
      return {
        results: [...state.results],
        photos: [...action.payload],
      };
    case 'EMPTY_IMAGES':
      return {
        ...state,
        photos: [],
      };
    default:
      return;
  }
};

export default reducer;
