import React, {Component} from 'react';
import {Menu} from 'antd';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';

class Heading extends Component {
  handleClick = (event) => {
    const {key} = event;
    console.log(key);
  };

  render() {
    return (
      <div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} onClick={this.handleClick}>
          <Link to={'/'} className={'home-header'}>
            <img className="logo" src={logo} alt={logo} style={{width: '40px', margin: '0 15px'}}/>
          </Link>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Heading;