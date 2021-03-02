import React from 'react';
import './App.css';
import { Button, Typography } from '@material-ui/core';
import image1 from './assets/sliders/slider1.jpg';
import leftArrow from './assets/buttons/icon-angle-left.svg';
import rightArrow from './assets/buttons/icon-angle-right.svg';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
      <div style={{ display: 'flex', flex: 1, minHeight: '534px' }}>
          <div style={{ width: '840px'}}>
            <img alt="home" src={image1} style={{ height: '534px', width: '100%'}}/>
          </div>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <div style={{ width: '465px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
              <Typography variant="h4">Discover innovative ways to decorate</Typography>
              <Typography variant="body1" style={{margin: '15px 0px 15px 0px'}}>
              We provide unmatched quality, comfort, and style for property owners across the country. 
              Our experts combine form and function in bringing your vision to life. 
              Create a room in your own style with our collection and make your property 
              a reflection of you and what you love.
              </Typography>
              <Button>{`S H O P    N O W`}</Button>
            </div>
            <div style={{ minHeight: '80px', alignSelf: 'flex-start' }}>
              <Button variant="contained" color="primary" style={{ height: '100%', backgroundColor: 'black', borderRadius: '0px', width: '80px'}}>
                <img alt="left arrow" src={leftArrow}/>
              </Button>
              <Button variant="contained" color="primary" style={{ height: '100%', backgroundColor: 'black', borderRadius: '0px', width: '80px'}}>
                <img alt="right arrow" src={rightArrow}/>
              </Button>
            </div>
          </div>
      </div>
      <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ backgroundColor: 'purple', flex: 1.5}}></div>
          <div style={{ backgroundColor: 'pink', flex: 1}}></div>
          <div style={{ backgroundColor: 'yellow', flex: 1}}></div>
      </div>
    </div>
    </div>
  );
}

export default App;
