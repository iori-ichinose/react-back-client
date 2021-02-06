import axios from 'axios';
import {message} from 'antd';

/**
 * 通过axios发送异步ajax请求的函数模块
 * @param url 请求的地址
 * @param data 请求的数据
 * @param request 请求的方式
 * @return {Promise}
 */
function sendAjax(url, data = {}, request = 'GET') {
  return new Promise(
    (resolve) => {
      let promise;
      if (request === 'GET') {
        promise = axios.get(url, {
          params: data
        });
      } else {
        promise = axios.post(url, data);
      }
      promise.then(
        value => resolve(value.data),
        reason => message.error(reason.message)
      )
    }
  )
}

export default sendAjax;
