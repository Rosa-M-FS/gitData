import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import store from "../src/redux/store.js";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Provider store={store}>
      <App username="CarlosDiazGirol" />
    </Provider>
  </React.StrictMode>,
)
