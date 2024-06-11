import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import { TransactionProvider } from "./context/TransactionContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
  <TransactionProvider>
    <React.StrictMode>
      <App />
      <ToastContainer/>
    </React.StrictMode>
  </TransactionProvider>,
  document.getElementById('root')
)