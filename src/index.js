import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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


