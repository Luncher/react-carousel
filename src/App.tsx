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
      <Carousel autoplay>
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
