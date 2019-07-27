import React from 'react';
import { Card } from 'react-bootstrap';
import '../style/myCard.sass';
import {farToCel} from '../utils/utils';

const MyCard = ({degrees, date, unit ,name, loc , handleGoHome, id}) => {
    return (
        <Card border="primary" className='card' onClick= {() => loc === 'fav' ? handleGoHome(id, name) : null} >
            <Card.Body>
            <Card.Text>
                    {date&&date.slice(0,10)}
                </Card.Text>
                <Card.Text>{name}</Card.Text>
                <Card.Text>
                    {(unit === 'F')
                    ? farToCel(degrees) + 'C'
                    : degrees + unit
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    )};


export default MyCard;