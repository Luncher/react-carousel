import React, { CSSProperties } from 'react';
import './App.css';
import Carousel from './Carousel';

function App() {
  const style: CSSProperties = {
    lineHeight: '150px',
    textAlign: 'center',
    background: '#364d79',
    color: '#fff',
    margin: 0,
  }

  return (
    <div className="App">
      <Carousel autoplay effect='slide' interval={2000} dotPosition='left' easing="step-end">
        <div>
          <p style={style}>1</p>
        </div>
        <div>
          <p style={style}>2</p>
        </div>
        <div>
          <p style={style}>3</p>
        </div>
      </Carousel>
      <div style={{ margin: '10px 0' }}></div>
      <Carousel autoplay effect='slide' interval={2000} dotPosition='left' easing="step-start">
        <div>
          <p style={style}>1</p>
        </div>
        <div>
          <p style={style}>2</p>
        </div>
        <div>
          <p style={style}>3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
