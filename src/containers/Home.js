import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MySearch from '../components/MySearch';
import MyWeather from '../components/MyWeather';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as weatherActions from '../actions/weatherActions';
import * as favActions from '../actions/favActions';
import Toaster from '../components/Toaster';

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value:'',
            name:'',
            cityName:'',
            iconColor:''
        }
    }
    componentDidMount(){
        const { favList, currentCity } = this.props;
        this.setState({value:currentCity.id, cityName:currentCity.cityName, iconColor: currentCity.iconColor})
        this.props.actions.getFiveDayWeather(currentCity.id);
        this.props.actions.getCurrentWeather(currentCity.id);
        if(favList.length>0){
            for (let index = 0; index < favList.length; index++) {
                if(favList[index].key===currentCity.id){
                    this.setState({iconColor:'red'})
                }
                
            }
        }
    }

    handleFormChange = (e) => {
        this.setState({name:e.target.value})
        this.props.actions.getAutoComplete(e.target.value);
        
    }
    handleOnSelect = (name) => {
        const { favList } = this.props;
        const newKey = this.props.cities.filter((city) => {
            return (city.LocalizedName === name)
        }) 
        const key = newKey[0].Key;
        this.setState({name, value:key, cityName:name })
        this.props.actions.getFiveDayWeather(key);
        this.props.actions.getCurrentWeather(key);
        if(favList.length>0){
            let c=0;
            for (let index = 0; index < favList.length; index++) {
                
                if(favList[index].key!==key)
                c++;
                if(favList[index].key===key)
                this.setState({iconColor:'red'})
            }
            if(c===favList.length)this.setState({iconColor:'black'})
        }
    }
    handleOnClickToFav = () => {
        const { value, cityName } = this.state;
        const { favList, currentWeather, currentCity } = this.props;

        if(favList.length===0){
            this.props.actions.addToFavorites(currentWeather, value, cityName);
            this.setState({iconColor:'red'})
        }
        else if(favList.length>0){
            let c=0;
            for (let index = 0; index < favList.length; index++) {
                if(favList[index].key!==currentCity.id){
                    c++
                }
                
                if(favList[index].key===value){
                    this.setState({iconColor:'black'})
                    const newList = favList.filter((city) => {
                        return city.key !== value
                    })
                    this.props.actions.remFromFav(newList)
                    this.props.actions.editCurrentCity(value, cityName, 'black')
                }
            }
            if(c===favList.length){
                this.props.actions.addToFavorites(currentWeather,value,cityName);
                this.setState({iconColor:'red'})
            }
        }
  
    }
    handleToastClose = () => {
        this.props.actions.failMsg('',false)
    }

    render() {
        const list = this.props.cities.map((city)=>{
            return city.LocalizedName
        })
        const {cityName, name, iconColor} = this.state;
        const {currentWeather, FiveDayWeather, showFailMsg, msg} = this.props;
        return (
            <div>
            <MySearch 
            onChange={ this.handleFormChange }
            cities= {list} 
            value={name}
            OnSelect={this.handleOnSelect}
            loadOptions={this.loadOptions}/>
            <MyWeather 
            currentWeather={currentWeather} 
            weather={FiveDayWeather}
            onClick={this.handleOnClickToFav}
            iColor={iconColor}
            name={cityName}
            />
            {showFailMsg&&<Toaster 
            showFailMsg={showFailMsg} 
            msg={msg} onToastClose={this.handleToastClose}/>}
            </div>
        );
    }
}

Home.defaultProps = {
    cities: [],
    currentWeather: {},
    FiveDayWeather:[]
}
Home.propTypes = {
    cities: PropTypes.array,
    FiveDayWeather: PropTypes.array,
    currentWeather: PropTypes.object    
}

const mapStateToProps = (state) => {
    return {
        cities: state.weatherReducer.cities,
        FiveDayWeather: state.weatherReducer.DailyForecasts,
        currentWeather: state.weatherReducer.currentWeather,
        currentCity: state.weatherReducer.currentCity,
        favList: state.favoritesReducer.favorites,
        showFailMsg: state.notificationsReducer.showFailMsg,
        msg: state.notificationsReducer.msg
    };
};

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({ ...weatherActions, ...favActions}, dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps) (Home);