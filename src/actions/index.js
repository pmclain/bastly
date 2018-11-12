import { ActionTypes } from '../config/constants';

export const setApiKey = (apiKey, services, activeService, versions, activeVersion) => {
  return ({
    type: ActionTypes.SET_API_KEY,
    payload: {
      apiKey: apiKey,
      services: services,
      activeService: activeService,
      versions: versions,
      activeVersion: activeVersion
    }
  });
}

export const setServiceId = (serviceId, data) => {
  return ({
    type: ActionTypes.SET_SERVICE_ID,
    payload: {serviceId: serviceId, versions: data.versions}
  });
}

export const setVersion = (version) => {
  return ({
    type: ActionTypes.SET_VERSION,
    payload: version
  })
}

export const setActiveMenu = (menu) => {
  return ({
    type: ActionTypes.SET_ACTIVE_MENU,
    payload: menu
  })
}
