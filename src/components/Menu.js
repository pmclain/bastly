import React, { Component } from 'react';
import { MenuItems } from '../config/constants';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  setActiveMenu(menu) {
    this.props.setActiveMenu(menu);
  }

  render() {
    const { activeMenu } = this.props;

    return (
      <ul className="nav flex-column nav-pills">
        {MenuItems.map(item => (
          <li className="nav-item" key={item[0]} onClick={() => this.setActiveMenu(item[0])}>
            <a className={'nav-link' + (item[0] === activeMenu ? ' active' : '')} href="#">{item[1]}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export { Menu };
