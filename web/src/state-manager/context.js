import _ from 'lodash';
import { createContext, useReducer } from 'react';
import StateConstant from './constant';

export const SemWebContext = createContext();
const initialState = {};

const reducer = (state, action) => {
  function _setState(payload) {
    return { ...state, ...payload };
  }
  switch (action.type) {
    case StateConstant.GET_SMART_DEVICE_BRANDS:
      return _setState({ smartDeviceBrand: action.payload.brand });
    default:
      return {
        ...state,
      };
  }
};

export const SemWebProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SemWebContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SemWebContext.Provider>
  );
};
