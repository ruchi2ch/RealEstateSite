import React from 'react';

function Howitworks(){
    return(
        <div className='how-it-works'>
            <div className='container'>
                 <h2>How It Works</h2>
            <div className='flex'>
                    
                    <div>
                        <span className='fas fa-home'></span>
                        <h4>Find a Property</h4>
                        <p>Find the ideal property you need.</p>
                    </div>

                    <div>
                        <span className='fas fa-dollar-sign'></span>
                        <h4>Buy a Property</h4>
                        <p>Make an offer on it and pay the amount.</p>
                    </div>

                    <div>
                        <span className='fas fa-chart-line'></span>
                        <h4>Investing</h4>
                        <p>Happy Investing.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Howitworks;