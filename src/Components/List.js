import React from 'react';
import Card from '../Ul/Card';
import './List.css'

const List = props => {
   
    return (
            <li onClick={props.removeList} className='lists'>{props.task}</li>
       
    )
};

export default List;
