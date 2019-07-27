import AT from '../constants/actionTypes';

export const initialState = {
    favorites:[]
};

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case AT.ADD_TO_FAVORITES:
            return {
                ...state, favorites: [...state.favorites ,action.payload]
            }
        case AT.REM_FROM_FAV:
            return {
                ...state, favorites: action.payload
            }
            default:
            return state;
    }
}

export default favoritesReducer;
