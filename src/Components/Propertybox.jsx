import React from 'react';

function Propertybox(props){
    return(
        <div className='p-box'>
            <img src={props.image} alt='product'/>
            <p> {props.name} </p>
            <a href='#'className='price'> {props.price} </a>
            <a href='#'className='buy-btn'>Explore</a>
        </div>
    )
}

export default Propertybox;