import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './routes';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer autoClose={3000} />
    <RoutesApp />
  </React.StrictMode>
);