import { connect } from 'react-redux'
import { setApiKey, setServiceId, setVersion } from '../actions'
import ServiceList from '../components/ServiceList'
import FastlyService from '../services/FastlyService';

const mapStateToProps = state => {
  return {
    services: state.services,
    versions: state.versions,
    activeVersion: state.activeVersion
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setApiKey: apiKey => {
      FastlyService.initialize(apiKey).then(ServicesResult => {
        const serviceId = ServicesResult.data.data[0].id;
        FastlyService.setServiceId(serviceId);
        FastlyService.getService().then(serviceResult => {
          let activeVersion;
          serviceResult.data.versions.forEach((version, idx) => {
            if (version.active) {
              FastlyService.setVersion(version.number);
              activeVersion = version;
            } else if (activeVersion === undefined && idx === (serviceResult.data.versions.length - 1)) {
              //Use last version if none are active
              FastlyService.setVersion(version.number);
              activeVersion = version;
            }
          });
          dispatch(setApiKey(
            apiKey,
            ServicesResult.data.data,
            serviceId,
            serviceResult.data.versions,
            activeVersion
          ));
        });
      });
    },
    setServiceId: event => {
      const serviceId = event.target.value;
      FastlyService.setServiceId(serviceId);
      FastlyService.getService().then(result => {
        result.data.versions.forEach(version => {
          if (version.active) {
            FastlyService.setVersion(version.number);
            dispatch(setVersion(version));
          }
        });
        dispatch(setServiceId(serviceId, result.data));
      });
    },
    setVersion: event => {
      FastlyService.setVersion(event.target.value);
      dispatch(setVersion(event.target.value));
    }
  }
}

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceList)

export default Header