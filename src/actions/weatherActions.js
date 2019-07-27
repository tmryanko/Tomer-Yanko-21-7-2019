import axios from 'axios';
import AT from '../constants/actionTypes';

const API_KEY2 = process.env.WEATHER_API_KEY2;

export const getAutoCompleteSuccess = (cities) => ({
    type: AT.GET_AUTO_COMPLETE_SUCCESS,
    payload: cities
  });
  export const getFiveDayWeatherSuccess = (weather) => ({
    type: AT.GET_FIVE_DAY_WEATHER_SUCCESS,
    payload: weather
  });
  export const getCurrentWeatherSuccess = (weatherText, date, degrees, unit) => ({
    type: AT.GET_CURRENT_WEATHER_SUCCESS,
    payload: {weatherText, date, degrees, unit}
  });
  export const failMsg = (msg, msgBool) => ({
    type: AT.FAIL_MSG,
    payload: msg ,msgBool
  });

  

export const getAutoComplete = (e) => (dispatch) => {
    axios.get(`${AT.LINK}locations/v1/cities/autocomplete?apikey=${AT.API_KEY2}&q=${e}`)
    .then((res) => {
        if(res.data.length>0){
        const cities = res.data.map((c) => {
            return {LocalizedName: c.LocalizedName,Key: c.Key}
            
        })
        dispatch(getAutoCompleteSuccess(cities));}
    })
    .catch(() => {
        dispatch(failMsg('autoCompleteFail', true))
    });
};

export const getFiveDayWeather = (id) => (dispatch) => {
    axios.get(`${AT.LINK}forecasts/v1/daily/5day/${id}?apikey=${AT.API_KEY2}`)
    .then((res) => {
        dispatch(getFiveDayWeatherSuccess(res.data.DailyForecasts));
    }).catch(() => {
        dispatch(failMsg('FiveDayWeather Fail', true))
    });
};
export const getCurrentWeather = (id) => (dispatch) => {
    axios.get(`${AT.LINK}currentconditions/v1/${id}?apikey=${AT.API_KEY2}`)
    .then((res) => {
        dispatch(getCurrentWeatherSuccess(
            res.data[0].WeatherText,
            res.data[0].LocalObservationDateTime,
            res.data[0].Temperature.Metric.Value,
            res.data[0].Temperature.Metric.Unit
         ))
    }).catch(() => {
        dispatch(failMsg('CurrentWeather Fail', true))
    });
};