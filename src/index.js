import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';

// let response = await fetch('https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json')
// let data = await response.json()
// console.log(data)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

reportWebVitals();


