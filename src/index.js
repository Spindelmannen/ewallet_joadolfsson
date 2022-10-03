import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; //obs browserrouter är nu router
import store from './redux/configureStore'
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
    <Router>
      {/* kopplar upp redux configureStoren med en provider, nu har vi tillgång till storen */}
      <Provider store={store}> 
        <App />
      </Provider>
    </Router>
  
);

