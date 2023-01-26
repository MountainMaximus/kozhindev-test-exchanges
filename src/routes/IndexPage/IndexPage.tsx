import * as React from "react";
import Field from "@steroidsjs/core/ui/form/Field";

import "./IndexPage.scss";
import { useBem } from "@steroidsjs/core/hooks";
/**
 * Обычный пример использования Field.
 * @order 1
 * @col 6
 */
export default function IndexPage() {
  const bem = useBem("IndexPage");

  return (
    <div className={bem.block()}>
      Hello ;)
      <Field attribute="field" label="Basic" />
    </div>
  );
}
