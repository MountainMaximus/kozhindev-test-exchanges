import { ExchangeState, ISO } from "types/type";
import { SET_PARAMETERS } from "../actions/exchanger";

const initialState: ExchangeState = {
  currency: ISO.RUB,
  amount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PARAMETERS:
      return {
        ...state,
        currency: action.payload.currency,
        amount: action.payload.amount,
      };
    default:
      return state;
  }
};
