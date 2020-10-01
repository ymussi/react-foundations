import './index.css';
import reactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/basics/Primeiro'

const el = document.getElementById('root');
// const hello = <strong>Olá React!!</strong>;


reactDOM.render(
    <div>
        {/* { hello } */}
        <Primeiro></Primeiro>
    </div>,
    el
    );