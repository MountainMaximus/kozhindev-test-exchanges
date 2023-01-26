import { SET_STATUS, SET_RATES } from "../actions/currencies";

import { currenciesInitialState, ISO, Status } from "../types/type";
import { RootState } from "./store";

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

        rates: { RUB: 1, ...ISOFilter },
      };
    }

    default:
      return state;
  }
};

export const getRates = (state: RootState) => state.currencies;
