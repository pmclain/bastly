import axios from 'axios';

class FastlyService {
  static apiKey = '';
  static serviceId = '';
  static version = '';

  /**
   * Set fastly api key and get auth information
   * @param {string} key 
   * @returns {Promise}
   */
  initialize(key) {
    this.setApiKey(key);

    return this.getServices();
  }

  setApiKey(key) {
    this.apiKey = key;
    axios.defaults.headers.common = {
        'cross-domain': true,
        'Fastly-Key': this.apiKey,
        'Accept': 'application/json'
    };
  }

  getServiceId() {
    return this.serviceId;
  }

  setServiceId(serviceId) {
    this.serviceId = serviceId;
  }

  getVersion() {
    return this.version;
  }

  setVersion(version) {
    this.version = version;
  }

  getServices() {
    return axios.get('/services');
  }

  getService() {
    return axios.get('/service/' + this.serviceId);
  }

  getBackend() {
    return axios.get('/service/' + this.serviceId + '/version/' + this.version + '/backend');
  }

  getBackendDetail(name) {
    return axios.get('/service/' + this.serviceId + '/version/' + this.version + '/backend/' + name);
  }
}

export default new FastlyService()
