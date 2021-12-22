import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Card() {
  return (
    <div className='card'>
      <h1>Check out these Properties</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1565329921943-7e537b7a2ea9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmxhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              text='Omaxe The Resort Chandigarh Starting Price
              ₹ 37.12 L
              Onwards'
              label='Chandigarh'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1581404476143-fb31d742929f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmxhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              text='Maxxus Elanza Builder Price
              ₹ 64.9 L
              Onwards'
              label='Zirakpur'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZsYXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              text='Skylar Homes ₹64.9 - 74.9Lac'
              label='Zirakpur'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1581404501824-b69dfb89f64c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZsYXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              text='Malwa Escon Primera ₹58.34Lac'
              label='Chandigarh ₹58.34Lac'
              path='/products'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1581404569456-a2e7007c3979?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZsYXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              text='Vera Gold Mark ₹1.09 - 1.15Crore '
              label='Zirakpur'
              path='/sign-up'
            />
            <CardItem
            src='https://images.unsplash.com/photo-1581404569456-a2e7007c3979?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZsYXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            text='NK Savitry Greens 1 ₹62.53 - 68.08Lac '
            label='Zirakpur'
            path='/sign-up'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
