import React from "react";
import { useSelector } from "@steroidsjs/core/hooks";
import { getRates } from "reducers/currencies";

export const TimeField: React.FC<{ className: CssClassName }> = ({
  className,
}) => {
  const [date, setDate] = React.useState("");
  const { rates } = useSelector(getRates);

  React.useEffect(() => {
    const date = new Date();
    setDate(date.toLocaleTimeString());
  }, [rates]);
  return <span className={className}>{date}</span>;
};
