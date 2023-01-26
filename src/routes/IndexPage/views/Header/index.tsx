import { useDispatch } from "@steroidsjs/core/hooks";
import React from "react";
import { fetchRates } from "../../../../actions/currencies";
import Button from "@steroidsjs/core/ui/form/Button/Button";
import Head from "@steroidsjs/core/ui/layout/Header";
import { TimeField } from "./TimeField";

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  /**Обработчик запроса актуальных котировок */
  const onClickUpdate = () => {
    dispatch(fetchRates());
  };

  return (
    <Head
      logo={{
        title: "Курсы валют",
      }}
    >
      <div>
        Время последнего обновления курсов:
        <TimeField />
      </div>

      <Button onClick={onClickUpdate} size={"md"} className="ml-4">
        Обновить курсы
      </Button>
    </Head>
  );
};
