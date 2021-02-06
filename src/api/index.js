import sendAjax from './ajax';

const BASE = '';

/**
 * 用户登录接口
 * @param username 用户名
 * @param password 密码
 * @return {Promise}
 */
export const sendLogin =
  (username, password) => sendAjax(BASE + '/login', {username, password}, 'POST');

/**
 * 添加用户接口
 * @param userData 用户属性对象，包括用户名、密码、创建时间等
 * @return {Promise}
 */
export const addUser =
  (userData) => sendAjax(BASE + '/manage/user/add', userData, 'POST');

