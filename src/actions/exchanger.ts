import { pailoadExchange } from "types/type";

export const SET_PARAMETERS = "SET_PARAMETERS";

export const setExchangeParameters = (payload: pailoadExchange) => ({
  type: SET_PARAMETERS,
  payload,
});
