import React, { Component } from 'react';
import FastlyService from '../services/FastlyService';
import Clone from './Clone';

class ServiceList extends Component {
  constructor(props) {
    super(props);

    this.setApiKey = this.setApiKey.bind(this);
    this.apiKeyInput = React.createRef();
  }

  setApiKey(event) {
    event.preventDefault();
    this.props.setApiKey(this.apiKeyInput.current.value)
  }

  render() {
    const {services, versions, setServiceId, setVersion, cloneVersion} = this.props;
    let clone;
    if (versions.length > 0) {
      clone = <Clone />
    }

    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.setApiKey} style={{width: "100%"}}>
            <div className="input-group">
              <input type="text" className='form-control' ref={this.apiKeyInput} />
              <div className="input-group-append">
                <button type="submit" className="btn btn-outline-secondary">Set API Key</button>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Services</span>
            </div>
            <select onChange={setServiceId} className="form-control">
            {services.map(service => (
              <option value={service.id} key={service.id}>
                {service.attributes.name + ' - ' + service.id}
              </option>
            ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Versions</span>
            </div>
            <select onChange={setVersion} value={FastlyService.getVersion()} className="form-control">
            {versions.map(version => (
              <option value={version.number} key={version.number}>
                {version.number}{(version.active ? ' - Active' : '' )}{version.locked ? '🔒' : ''}
              </option>
            ))}
            </select>
            {clone}
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceList;
