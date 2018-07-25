import React from "react";
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';
import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.43.205:8080/v1/admin'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
