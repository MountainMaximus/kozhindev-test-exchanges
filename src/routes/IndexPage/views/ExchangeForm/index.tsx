import React from "react";
import Button from "@steroidsjs/core/ui/form/Button/Button";
import { ExchangeField } from "./ExchangeField";

export const ExchangeForm: React.FC = ({}) => {
  const [quantityFields, setQuantityFields] = React.useState(2);

  const addField = React.useCallback(() => {
    if (quantityFields <= 9) setQuantityFields((prev) => prev + 1);
  }, []);

  return (
    <div>
      {[...new Array(quantityFields)].map((_, index) => (
        <ExchangeField key={index} />
      ))}
      <Button
        onClick={addField}
        label="Добавить еще одну валюту"
        size="Large"
        disabled={quantityFields > 9}
      />
    </div>
  );
};
