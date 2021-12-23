import React from 'react';
// import Agentbox from './Agentbox';
// import agentimage1 from '../images/s1.png';
// import agentimage2 from '../images/s2.png';
// import agentimage3 from '../images/s3.png';
import {GoogleMap,withScriptjs,withGoogleMap} from 'react-google-maps';

function Map(){
    return(
    <GoogleMap defaultZoom={10} 
    defaultCenter={{lat:30.733315, lng:76.779419}}
    />
    );
  }
  const WrappedMap=withScriptjs(withGoogleMap(Map));

 function Agent(){
     return(
        //  <div className='agent'>
        //      <div className='a-heading'>
        //          <h1>Agents</h1>
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aperiam.</p>          
        //      </div>
        //      <div className='b-container'>
        //          <Agentbox image={agentimage1} name="Broker"/>
        //          <Agentbox image={agentimage2} name="Manager"/>
        //          <Agentbox image={agentimage3} name="Website"/>
        //      </div>
        //  </div>
          <div style={{width:'100vw',height:'100vh'}}>
    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=API`}
    loadingElement={<div style={{height:"100%"}}/>}
    containerElement={<div style={{height:"100%"}}/>}
    mapElement={<div style={{height:"100%"}}/>}
    />
    </div>
     )
 }

 export default Agent;
