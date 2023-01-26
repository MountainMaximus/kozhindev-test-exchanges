import { AxiosAnswer, Status } from "types/type";
import axios from "../utils/axios";

export const SET_STATUS = "SET_STATUS";
export const SET_RATES = "SET_RATES";

export const setStatus = (payload) => ({
  type: SET_STATUS,
  payload,
});

export const setRates = (items) => ({
  type: SET_RATES,
  payload: items,
});
export const fetchRates = () => async (dispatch) => {
  dispatch({
    type: "SET_STATUS",
    payload: Status.LOADING,
  });

  await fetch("https://www.cbr-xml-daily.ru/latest.js")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      dispatch(setRates(data.rates));
    })
    .catch(function (e) {
      console.log(e);
    });
  //   const { data } = await axios.get<AxiosAnswer>(
  //     "https://www.cbr-xml-daily.ru/latest.js"
  //   );
  // dispatch(setRates(data.rates));
};
