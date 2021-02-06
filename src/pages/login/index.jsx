import React, {Component} from 'react';
import {Form, Input, Button, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import './index.less';
import logo from '../../assets/logo.png';
import {sendLogin} from '../../api';
import memoryUtils from '../../utils/memoryUtils';
import {saveUser} from '../../utils/storageUtils';
import {Redirect} from 'react-router-dom';


class Login extends Component {
  layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 16},
  };

  tailLayout = {
    wrapperCol: {offset: 9, span: 12},
  };

  onFinish = async (values) => {
    const {username, password} = values;
    const {history} = this.props;

    const res = await sendLogin(username, password);
    if (res.status === 0) {
      message.success('登陆成功！');
      memoryUtils.user = res.data;
      saveUser(res.data);
      history.replace('/');
    } else {
      message.error(res.msg);
    }
  };

  onFinishFailed = (errorInfo) => {
    message.error('login failed').then(
      () => console.log('login failed: ', errorInfo)
    );
  };

  render() {
    const user = memoryUtils.user;
    if (user && user._id) {
      return <Redirect to={'/'}/>;
    }
    return (
      <div className={'login'}>
        <header className={'login-header'}>
          <img src={logo} alt={'logo'}/>
          <h1>React: 后台管理项目</h1>
        </header>
        <section className={'login-content'}>
          <h2>登录</h2>
          <Form
            {...this.layout}
            name="basic"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="用户名："
              name="username"
              rules={[
                {required: true, message: 'Please input your username!'},
                {max: 12, message: 'Username shouldn\'t be more than 12 characters'},
                {min: 4, message: 'Username must be more than 4 words'},
                {pattern: /^[a-zA-z0-9_]+$/, message: 'Username can only contains numbers, letters or underlines'}
              ]}
            >
              <Input prefix={<UserOutlined/>}/>
            </Form.Item>

            <Form.Item
              label="密码："
              name="password"
              rules={[{required: true, message: 'Please input your password!'}]}
            >
              <Input.Password prefix={<LockOutlined/>}/>
            </Form.Item>

            <Form.Item {...(this.tailLayout)}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

export default Login;
