import React, { Component } from 'react';
import Backend from './backends/Backend';
import FastlyService from '../../services/FastlyService';

class Backends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backends: [],
      error: true,
      errorMessage: 'Please enter a valid API key'
    }

    if (FastlyService.getVersion() && FastlyService.getServiceId()) {
      this.initDisplay();
    }
  }

  componentWillReceiveProps(props) {
    if (FastlyService.getVersion() && FastlyService.getServiceId()) {
      this.initDisplay();
    }
  }

  initDisplay() {
    FastlyService.getBackend().then(result => {
      this.setState({
        error: false,
        backends: result.data
      })
    }).catch(err => {
      this.setState({
        error: true,
        errorMessage: err.message
      });
    });
  }

  render() {
    const { error, errorMessage, backends } = this.state;
    var backendElements = [];
    for (var i = 0; i < backends.length; i++) {
      backendElements.push(<Backend backend={backends[i]} />);
    }

    return (
      <div>
        {error ? errorMessage : backendElements}
      </div>
    );
  }
}

export default Backends;
