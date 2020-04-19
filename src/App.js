import React from 'react';
import './App.css';

import Image from './Image.js'
import Info from './Info.js';
import Button from './Button.js';
import Title from './Title.js'

import germany from './img/germany.jpg'
import Bonn from './img/uni_bonn.jpg';
import Pokhara from './img/pokhara_university.jpg';


function App() {
  return (
    <div className="App">
      <div className="card1">
        <Image imageSource = {germany} name="germany"/>
        <Title title = 'Germany' titleColor="green"/>
        <Info text='It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
         with the release of Letraset sheets containing Lorem Ipsum passages, and more
         recently with desktop publishing software like Aldus PageMaker'/>
        <Button label="Button Green" backgroundColor="green" />
      </div>
      <div className="card2">
        <Image imageSource= {Bonn} name="Bonn"/>
        <Title title = 'Bonn University' titleColor="blue"/>
        <Info text="It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
           with the release of Letraset sheets containing Lorem Ipsum passages, and more
           recently with desktop publishing software like Aldus PageMaker."/>
        <Button label='See details' backgroundColor="blue" />

      </div>
      <div className='card3'>
        <Image imageSource = {Pokhara} name="Pokhara"/>
        <Title title = 'Pokhara University' titleColor="red"/>
        <Info text='So now we’re good, right? Unfortunately, no. 
          The move from createClass to React.Component came with some
        tradeoffs, but as we saw, Class Fields took care of those.
        Unfortunately, there are still some more profound
        (but less talked about)'/>
        <Button label='Button Red' backgroundColor='red' />
      </div>

    </div>
  );
}

export default App;
