import React from 'react';
import aboutimge from '../images/hero.png'
function About(){
    return(
        <div className='about'>
            <div className='about-model'>
                <img src={aboutimge} alt='about image'></img>
            </div>
            <div className='about-text'>
                 <h2>We are the best<br/>Real Estate Company</h2>
                 <p></p> 
            </div>
        </div>
    )
}

export default About;