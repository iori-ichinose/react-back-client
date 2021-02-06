import React, {Component} from 'react';
import {Form, Input, Button, Checkbox, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import './index.less';
import logo from './images/logo.png';

class Login extends Component {
  state = {
    doRemember: false,
    defaultUserName: '',
    defaultPassword: ''
  };

  layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 16},
  };

  tailLayout = {
    wrapperCol: {offset: 9, span: 12},
  };

  onFinish = (values) => {
    const {username, password, remember} = values;
    this.setState(remember ? {
      doRemember: true,
      defaultUserName: username,
      defaultPassword: password
    } : {
      doRemember: false,
      defaultUsername: '',
      defaultPassword: ''
    });
    console.log('Success:', username, password, remember);
  };

  onFinishFailed = (errorInfo) => {
    message.error('login failed').then(
      () => console.log('login failed: ', errorInfo)
    );
  };

  render() {
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
            initialValues={{remember: true}}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="用户名："
              name="username"
              initialValue={this.state.defaultUserName}
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
              initialValue={this.state.defaultPassword}
              rules={[{required: true, message: 'Please input your password!'}]}
            >
              <Input.Password prefix={<LockOutlined/>}/>
            </Form.Item>

            <Form.Item {...(this.tailLayout)} name="remember" valuePropName="checked">
              <Checkbox>记住密码</Checkbox>
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
