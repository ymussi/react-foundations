import './index.css';
import reactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/basics/Primeiro'

const el = document.getElementById('root');

reactDOM.render(
    <div>
        <Primeiro></Primeiro>
    </div>,
    el
    );