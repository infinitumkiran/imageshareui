import React,{useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  
  return (

    

    <div className='hero-container' >
      <h1>Upload and share your images.</h1>
      <p>Drag and drop anywhere you want and start uploading your images now. 32 MB limit. Direct image links, BBCode and HTML thumbnails.</p>

      <div className='hero-btns'>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        
          <div class="container">
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              onClick={(e)=> {console.log(url);addurlfromtxtfield(url);}}
            >
              Choose File            </Button>
          </div>
        

      </div>
    </div>
  );
}

export default HeroSection;