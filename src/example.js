// Example.js
import React, { useState } from 'react';
import { Mycontext } from './Mycontext';
import Mycomponent from './Mycomponent';

export default function Example() { 
  const [text, setText] = useState('');

  return (
    <div>
      <Mycontext.Provider value={{ text, setText }}>
        <Mycomponent />
      </Mycontext.Provider>
    </div>
  );
}