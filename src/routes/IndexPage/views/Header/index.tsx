import { useDispatch } from "@steroidsjs/core/hooks";
import React from "react";
import { fetchRates } from "../../../../actions/currencies";
import Button from "@steroidsjs/core/ui/form/Button/Button";
import Head from "@steroidsjs/core/ui/layout/Header";

export const Header: React.FC = () => {
  const [date, setDate] = React.useState("");
  const dispatch = useDispatch();
  React.useEffect(() => {
    const date = new Date();
    setDate(date.toLocaleTimeString());
  }, []);

  const onClickUpdate = () => {
    dispatch(fetchRates());
    const date = new Date();
    setDate(date.toLocaleTimeString());
  };

  return (
    <Head
      logo={{
        title: "Курсы валют",
      }}
    >
      <div>
        Время последнего обновления курсов:
        <span>{date}</span>
      </div>

      <Button onClick={onClickUpdate} size={"md"} className="ml-4">
        Обновить курсы
      </Button>
    </Head>
  );
};
