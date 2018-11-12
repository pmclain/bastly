import { ActionTypes } from '../config/constants';

const initialState = {
  error: {"message": "Please input valid Fastly API key"},
  loading: false,
  apiKey: '',
  activeService: '',
  activeVersion: {},
  activeMenu: 'backend',
  services: [],
  versions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_API_KEY:
      return {
        ...state,
        error: false,
        apiKey: action.payload.apiKey,
        services: action.payload.services,
        versions: action.payload.versions,
        activeService: action.payload.activeService,
        activeVersion: action.payload.activeVersion
      };

    case ActionTypes.SET_SERVICE_ID: 
      return {
        ...state,
        activeService: action.payload.serviceId,
        versions: action.payload.versions  
      };

    case ActionTypes.SET_VERSION:
      return {
        ...state,
        activeVersion: action.payload
      };

    case ActionTypes.SET_ACTIVE_MENU:
      return {
        ...state,
        activeMenu: action.payload
      }

    default: 
      return state;
  }
}