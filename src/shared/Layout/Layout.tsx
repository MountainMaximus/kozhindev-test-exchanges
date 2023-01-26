import React from "react";

import { useBem, useDispatch } from "@steroidsjs/core/hooks";
import useLayout, {
  STATUS_OK,
  STATUS_LOADING,
} from "@steroidsjs/core/hooks/useLayout";

import { Notifications } from "@steroidsjs/core/ui/layout";
import { fetchRates } from "actions/currencies";
import "./Layout.scss";
import { ROUTE_ROOT } from "../../routes";

export default function Layout(props: React.PropsWithChildren<any>) {
  const bem = useBem("Layout");
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchRates());
  }, []);
  //const components = useComponents();
  const {
    status,
  } = useLayout(/*() => components.http.post('/api/v1/init', {
        timestamp: Date.now(),
    })*/);

  if (status !== STATUS_OK) {
    return status !== STATUS_LOADING ? status : null;
  }

  return (
    <div className={bem.block()}>
      <div className={bem.element("content")}>
        <Notifications />
        {props.children}
      </div>
    </div>
  );
}
