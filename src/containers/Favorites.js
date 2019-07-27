import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as favActions from '../actions/favActions';
import FavCardList from '../components/FavCardList';
import '../style/favorites.sass';


class Favorites extends Component {

    handleGoHome = (id, name ) => {
        this.props.actions.editCurrentCity(id, name, 'red');
        this.props.history.push("/Home");
    }

    render() {
        const { favList } = this.props;
        return (
            <div>
            {(favList.length===0)
             ?<div className='noFavorites'>No Favorites</div>
             :<div>
                <FavCardList weather={favList} handleGoHome={(id, name) => {this.handleGoHome(id, name)}}/>
             </div>}
             </div>
        );
    }
}

function mapStateToProps({favoritesReducer}) {
    return {
        favList: favoritesReducer.favorites
    };
}
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({ ...favActions}, dispatch)
    };
  }

export default connect(
    mapStateToProps,mapDispatchToProps
)(Favorites);