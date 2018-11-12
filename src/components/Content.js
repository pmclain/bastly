import React, { Component } from 'react';
import Backends from './content/Backends';

class Content extends Component {
  componentWillReceiveProps(props) {

  }

  setActiveMenu(menu) {
    this.props.setActiveMenu(menu);
  }

  render() {
    const { activeMenu, activeService, activeVersion } = this.props;
    let content;

    switch (activeMenu) {
      case 'backend': content = <Backends serviceId={activeService} version={activeVersion} />;
    }

    return (
      <div className="content">
        {content}
      </div>
    );
  }
}

export { Content };
