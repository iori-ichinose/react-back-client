import React, {Component} from 'react';
import './index.less';
import logo from '../../assets/logo.png';

class Heading extends Component {
  logout = () => {
    console.log('logout');
  }

  render() {
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎, aaa</span>
          <a onClick={this.logout}>退出</a>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">aaa</div>
          <div className="header-bottom-right">
            <span>1.1.11</span>
            <img src={logo} alt="weather"/>
            <span>ss</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Heading;