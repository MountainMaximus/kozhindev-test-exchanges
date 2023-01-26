import { combineReducers } from "redux";
import {
  form,
  auth,
  fields,
  list,
  notifications,
  modal,
  router,
  screen,
} from "@steroidsjs/core/reducers";
import currenciesReducer from "./currencies";
import exchangerReducer from "./exchanger";

const customReducers = combineReducers({
  currenciesReducer,
});

export default (asyncReducers) =>
  combineReducers({
    form,
    auth,
    fields,
    list,
    notifications,
    modal,
    screen,
    currencies: currenciesReducer,
    exchanger: exchangerReducer,
    ...asyncReducers,
    router: (state, action) =>
      router(
        asyncReducers.router ? asyncReducers.router(state, action) : {},
        action
      ),
  });

export type RootState = ReturnType<typeof customReducers>;
