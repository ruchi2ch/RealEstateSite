import React from 'react'
import Navbar from './Navbar'

function Header(){
    return (
        <div className='header'>  
        {/* <Navbar/> */}
        <div className='intro'>
            <p>Looking for a Property!</p>
            <h1><span>Buy </span>and <span>Sell </span>Properties</h1>
            <p className='details'>This is an online platform where trades in real estate are taking place at much faster and advanced manner.
             We will not only find your ideal real estate property, but also ensure that the process is as smooth and seamless as it can be.  </p>
            </div>      
        </div>
    )
}


export default Header;