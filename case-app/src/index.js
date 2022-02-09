import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Item from './Item';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <section class="cards">
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
<section class="cards">
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
      <div className="card"><Item/></div>
    </section>
*/