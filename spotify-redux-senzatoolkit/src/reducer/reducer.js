//stato iniziale
const initialState = {
    searchResults: [],
    favourites: []
  };
  
  //reducer con stato iniziale e action 
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_RESULTS':
        return {
          ...state.searchResults,
          searchResults: action.payload,
        };
      case 'ADD_TO_FAVOURITES':
        return {
          ...state.favourites,
          searchResults: action.payload,
        };
      case 'REMOVE_TO_FAVOURITES':
        return {
          ...state.favourites,
          favourites: state.favourites.filter(f => f.song_name !== action.payload.song_name)
        };
      default:
        return state;
    }
  };
  
  export default reducer;