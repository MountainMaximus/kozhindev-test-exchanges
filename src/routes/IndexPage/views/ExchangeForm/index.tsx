import React from "react";
import Button from "@steroidsjs/core/ui/form/Button/Button";
import { ExchangeField } from "./ExchangeField";

import "./ExchangeForm.scss";
import { useBem } from "@steroidsjs/core/hooks";
export const ExchangeForm: React.FC = ({}) => {
  const bem = useBem("ExchangeForm");
  const [quantityFields, setQuantityFields] = React.useState(2);
  /**Добавление поля для конвертации */
  const addField = React.useCallback(() => {
    if (quantityFields <= 9) setQuantityFields((prev) => prev + 1);
  }, []);

  return (
    <div className={bem.block()}>
      <div className={bem.element("title")}>Форма конвертации валют</div>
      {[...new Array(quantityFields)].map((_, index) => (
        <ExchangeField key={index} index={index} />
      ))}
      <Button
        onClick={addField}
        label="Добавить еще одну валюту"
        size="Large"
        disabled={quantityFields > 9}
        className={"mt-2 mx-auto"}
      />
    </div>
  );
};
