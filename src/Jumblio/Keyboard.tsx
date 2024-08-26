import React from 'react';
import Results from './Results';
import CodeOutlinedIcon from '@mui/icons-material/AbcOutlined';
import './Keyboard.css';

interface KeyboardProps {
  onLetterClick: (letter: string) => void;
}

function Keyboard({onLetterClick}: KeyboardProps) {
  const row1: string[] = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const row2: string[] = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const row3: string[] = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  return (
    <div className='container-fluid p-2'>

      <div className='row first-row justify-content-center mb-3'>
        {row1.map((letter, index) => (
          <div key={index} className='col-auto bg-transparent mb-1'>
            <a 
              className='btn btn-outline-primary btn-lg text-uppercase circle-button'
              onClick={() => onLetterClick(letter)}
            >
              <span>{letter}</span>
            </a>
          </div>
        ))};
      </div>
      
      <div className='row second-row justify-content-center mb-3'>
        {row2.map((letter, index) => (
          <div key={index} className='col-auto bg-transparent mb-1'>
            <a 
              className='btn btn-outline-primary btn-lg text-uppercase circle-button'
              onClick={() => onLetterClick(letter)}
            >
              <span>{letter}</span>
            </a>
          </div>
        ))};
      </div>

      <div className='row third-row justify-content-center'>
        {row3.map((letter, index) => (
          <div key={index} className='col-auto bg-transparent mb-1 mx-1'>
            <a 
              className='btn btn-outline-primary btn-lg text-uppercase circle-button'
              onClick={() => onLetterClick(letter)}
            >
              <span>{letter}</span>
            </a>
          </div>
        ))};
      </div>
    </div>
  );
};

export default Keyboard