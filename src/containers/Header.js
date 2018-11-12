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
          serviceResult.data.versions.forEach(version => {
            if (version.active) {
              FastlyService.setVersion(version.number);
              dispatch(setApiKey(
                apiKey,
                ServicesResult.data.data,
                serviceId,
                serviceResult.data.versions,
                version
              ));
            }
          });
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