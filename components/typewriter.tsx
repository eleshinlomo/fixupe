import React, {useState} from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';


interface TypewriterProps {
  textArray: string[]
}

const Typewriter = ({textArray} : TypewriterProps) => {

  const [ text ] = useTypewriter({
    words:textArray,
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div>
      <div className=' font-extrabold text-center text-2xl md:text-3xl text-blue-400'>
      <span className="bg-clip-text py-8 ">{text? text:null}</span>
        <Cursor cursorColor='transparent' />
      </div>
    </div>
  );
};

export default Typewriter;






