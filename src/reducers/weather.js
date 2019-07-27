import AT from '../constants/actionTypes';

export const initialState = {
    cities: [{LocalizedName: '',Key: ''}],
    DailyForecasts:[ {Temperature: { Maximum: { Value: '', Unit: '' } },Date:'' } ],
    currentWeather:{weatherText:'',date:'',degrees:'',unit:''},
    currentCity:{id:'215854',cityName:'Tel Aviv',iconColor:'black'}
  };

  const weatherReducer = (state = initialState, action) => {
      switch(action.type) {
        case AT.GET_AUTO_COMPLETE_SUCCESS: 
            return {
                ...state, cities: action.payload
            }
        case AT.GET_FIVE_DAY_WEATHER_SUCCESS:
            return {
                ...state, DailyForecasts: action.payload
            }
        case AT.GET_CURRENT_WEATHER_SUCCESS:
            return {
                ...state, currentWeather: action.payload
            }
            case AT.EDIT_CURRENT_CITY:
            return {
                ...state, currentCity: action.payload
            }
        
        default:
        return state;
      }
  };

  export default weatherReducer;