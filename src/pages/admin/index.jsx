import React, {Component} from 'react';
import memoryUtils from '../../utils/memoryUtils';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Layout, Breadcrumb, Col} from 'antd';
import LeftNav from '../../components/left-nav';
import Heading from '../../components/header';
import Home from '../home';
import Category from '../category';
import Product from '../product';
import Role from '../role';
import User from '../user';
import {Bar, Pie, Line} from '../charts';
import './index.less';

const {Header, Content, Footer, Sider} = Layout;

class Admin extends Component {
  render() {
    const user = memoryUtils.user;
    // 当前未登录，跳转到login
    if (!user._id) {
      return <Redirect to={'/login'}/>;
    }
    return (
      <Layout>
        <Heading/>
        <Content style={{padding: '0 50px'}}>
          <Breadcrumb className={'bread'} style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{padding: '24px 0'}}>
            <Sider className="site-layout-background" width={200}>
              <LeftNav/>
            </Sider>
            <Content style={{padding: '0 24px', minHeight: 400}}>
              <Switch>
                <Route path={'/home'} component={Home}/>
                <Route path={'/category'} component={Category}/>
                <Route path={'/product'} component={Product}/>
                <Route path={'/role'} component={Role}/>
                <Route path={'/user'} component={User}/>
                <Route path={'/charts/bar'} component={Bar}/>
                <Route path={'/charts/line'} component={Line}/>
                <Route path={'/charts/pie'} component={Pie}/>
                <Redirect to={'/home'}/>
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{textAlign: 'center'}}>后台管理项目 based on React</Footer>
      </Layout>
    );
  }
}

export default Admin;