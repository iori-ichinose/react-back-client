import React, {Component} from 'react';
import {Menu} from 'antd';
import {Link, withRouter} from 'react-router-dom';
import menuList, {mapping} from '../../config/menuConfig';

const {SubMenu} = Menu;

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.nodes = this.getMenuNodes(menuList);
  }

  getMenuNodes = menus => {
    const {pathname} = this.props.location;
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
        const find = menu.children.find(item => item.link === pathname);
        if (find) {
          this.openKey = menu.key;
        }
        return (
          <SubMenu key={menu.key} icon={<menu.icon/>} title={menu.title}>
            {this.getMenuNodes(menu.children)}
          </SubMenu>
        );
      }
    });
  };

  render() {
    const {pathname} = this.props.location;
    return (
      <Menu
        mode="inline"
        selectedKeys={[mapping.get(pathname)]}
        defaultOpenKeys={[this.openKey]}
        style={{height: '100%'}}
      >
        {this.nodes}
      </Menu>
    );
  }
}

export default withRouter(LeftNav);
