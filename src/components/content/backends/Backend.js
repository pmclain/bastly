import React, { Component } from 'react';
import View from './View';

class Backend extends Component {
  constructor (props) {
    super(props);

    this.state = {
      showDetails: false,
      edit: false,
      backend: props.backend
    }

    this.toggleVisbility = this.toggleVisbility.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      backend: props.backend
    })
  }

  toggleVisbility() {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  }

  render() {
    const { showDetails, backend } = this.state;
    let body;

    if (showDetails) {
      body = <View backend={backend} />;
    }

    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th colSpan="2">{backend.address + ':' + backend.port} <button type="button" onClick={this.toggleVisbility}>{!showDetails ? 'Show' : 'Hide'} Details</button></th>
            </tr>
          </thead>
          {body}
        </table>
      </div>
    );
  }
}

export default Backend;
