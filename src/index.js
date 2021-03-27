import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configurationStore from "./redux/index";

import {App} from './App';

import 'antd/dist/antd.css';
import './styles/index.scss';


const store = configurationStore;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

