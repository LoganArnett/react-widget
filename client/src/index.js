import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppContainer } from './App';
import './index.css';

function initializeWidget() {
  const div = document.createElement('div');
  const div2 = document.createElement('div');
  div.id = 'custom-widget-container';
  div2.id = 'custom-widget';

  div.appendChild(div2);
  document.querySelector('body').appendChild(div);
  console.log(document.getElementById('custom-widget-container'));

  setTimeout(() => {
    const root = ReactDOM.createRoot(
      document.getElementById('custom-widget-container')
    );

    root.render(
      <React.StrictMode>
        <AppContainer />
      </React.StrictMode>
    );
  }, 300);
}

initializeWidget();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
