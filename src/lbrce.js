import React, { useState } from 'react';
import axios from "axios"; // Import Axios
import ReactDOM from 'react-dom/client';
import Header from './Header';
import './index.css';

const root = document.getElementById('root');
const virtualRoot = ReactDOM.createRoot(root);

function Component() {
  const [index, setIndex] = useState(0);
  const array = ['WELCOME', 'TO', 'THE', 'WEDDING', 'OF', 'BRIDE : SADHIK', 'AND', 'GROOM: INKA CHEPPALEDHU','@ SRK HALL-LBRCE'];

  function ChangeName() {
    setIndex((prevIndex) => (prevIndex + 1) % array.length);
  }

  return (
    <div className="container">
      <Header />
      <h1>{array[index]}</h1>
      <button onClick={ChangeName}>CLICK HERE</button>
      <footer>
        <p>Organized by CSE,A.I&D.S,A.I&M.L</p>
        <center><p>@LBRCE</p></center>
      </footer>
    </div>
  );
}

virtualRoot.render(
  <Component />
);
