import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import memoryUtils from './utils/memoryUtils';
import {readUser} from './utils/storageUtils';

// 读取localStorage中用户数据
memoryUtils.user = readUser();

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
