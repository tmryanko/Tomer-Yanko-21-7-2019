import { combineReducers } from 'redux';
import weatherReducer from './weather';
import favoritesReducer from './favorites';
import notificationsReducer from './notifications';



const rootReducer = combineReducers({
    weatherReducer,
    favoritesReducer,
    notificationsReducer
});

export default rootReducer;
