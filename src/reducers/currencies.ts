import { SET_STATUS, SET_RATES } from "../actions/currencies";

import { currenciesInitialState, ISO, Status } from "../types/type";

const initialState: currenciesInitialState = {
  rates: {},
  status: Status.LOADING,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case SET_RATES: {
      const ISOFilter = Object.keys(action.payload)
        .filter((key) => key in ISO)
        .reduce((obj: { [index: string]: number }, key) => {
          obj[key] = action.payload[key];
          return obj;
        }, {});
      return {
        ...state,
        status: Status.SUCCESS,

        rates: ISOFilter,
      };
    }

    default:
      return state;
  }
};
