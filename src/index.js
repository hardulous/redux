import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// making this REDUX STORE available to all my application component 
import {Provider} from "react-redux";
import {store} from "./Service/Store"

ReactDOM.render(
  <React.StrictMode>

    {/* here now REDUX STORE is available to whole App component and its sub child and my whole app get store because of props store which contain REDUX STORE  */}
    <Provider store={store}> 

       <App />

    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
