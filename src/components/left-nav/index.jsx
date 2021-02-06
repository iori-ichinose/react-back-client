import React, {Component} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import menuList from '../../config/menuConfig';

const {SubMenu} = Menu;

class LeftNav extends Component {
  getMenuNodes = menus => {
    return menus.map(menu => {
      if (menu.children === undefined) {
        return (
          <Menu.Item key={menu.key} icon={<menu.icon/>}>
            <Link to={menu.link}>
              {menu.title}
            </Link>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu key={menu.key} icon={<menu.icon/>} title={menu.title}>
            {this.getMenuNodes(menu.children)}
          </SubMenu>
        );
      }
    });
  };

  render() {
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['item-home']}
        style={{height: '100%'}}
      >
        {
          this.getMenuNodes(menuList)
        }
      </Menu>
    );
  }
}

export default LeftNav;