import AT from '../constants/actionTypes';

export const addToFavorites = (currentWeather, key, cityName) => ({
    type: AT.ADD_TO_FAVORITES,
    payload: {currentWeather, key, cityName}
  });
export const remFromFav = (list) => ({
    type: AT.REM_FROM_FAV,
    payload: list
});
export const editCurrentCity = (id, cityName, iconColor) => ({
    type: AT.EDIT_CURRENT_CITY,
    payload: {id, cityName, iconColor}
});