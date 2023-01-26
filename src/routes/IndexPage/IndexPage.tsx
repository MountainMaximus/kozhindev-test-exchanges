import * as React from "react";
import Field from "@steroidsjs/core/ui/form/Field";

import "./IndexPage.scss";
import { useBem, useDispatch } from "@steroidsjs/core/hooks";
import { fetchRates } from "actions/currencies";

export default function IndexPage() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchRates());
  }, []);
  const bem = useBem("IndexPage");

  return (
    <div className={bem.block()}>
      Hello ;)
      <Field attribute="field" label="Basic" />
    </div>
  );
}
