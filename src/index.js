import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from './store';
import App from './App';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(

  <Provider store={store}> 
    <BrowserRouter>
      <HelmetProvider>
        <App tab="home" />
      </HelmetProvider>
    </BrowserRouter>  
  </Provider>
);