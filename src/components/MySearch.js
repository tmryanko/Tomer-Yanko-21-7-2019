import React from 'react';
import Autocomplete from 'react-autocomplete';
import '../style/mySearch.sass';

const MySearch = ({onChange, cities, OnSelect, value}) => {
    return (
        <div className='mySearch'>
        <Autocomplete
            inputProps={{className:'mySearchAutoCo', placeholder:'search'}}
            getItemValue={(item) => item}
            items={cities}
            renderItem={(item, isHighlighted) =>
            <div style={{position: 'relative', background: isHighlighted ? 'lightgray' : 'white' }}>
                {item}
            </div>
        }
        value={value}
        onChange={onChange}
        onSelect={OnSelect}
        />
        </div>
    )};


export default MySearch;