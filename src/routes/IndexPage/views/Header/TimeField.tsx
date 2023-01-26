import React from "react";
import { useSelector } from "@steroidsjs/core/hooks";
import { getRates } from "reducers/currencies";

export const TimeField: React.FC = () => {
  const [date, setDate] = React.useState("");
  const { rates } = useSelector(getRates);

  React.useEffect(() => {
    const date = new Date();
    setDate(date.toLocaleTimeString());
  }, [rates]);
  return <span>{date}</span>;
};
