import React, { Component } from 'react';

class Clone extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cloneVersion } = this.props;

    return (
      <div className="input-group-apend">
        <button type="button" className="btn btn-outline-secondary" onClick={cloneVersion}>Clone Version</button>
      </div>
    );
  }
}

export default Clone;
