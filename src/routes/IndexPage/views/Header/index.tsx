import { useBem, useDispatch } from "@steroidsjs/core/hooks";
import React from "react";
import { fetchRates } from "../../../../actions/currencies";
import Button from "@steroidsjs/core/ui/form/Button/Button";
import Head from "@steroidsjs/core/ui/layout/Header";
import { TimeField } from "./TimeField";
import "./Header.scss";
export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const bem = useBem("Header");
  /**Обработчик запроса актуальных котировок */
  const onClickUpdate = () => {
    dispatch(fetchRates());
  };

  return (
    <Head
      className={bem.block()}
      logo={{
        title: "Курсы валют",
      }}
    >
      <div className={bem.element("right-chunk")}>
        <div className={bem.element("text")}>
          Время последнего обновления курсов:
          <TimeField className={bem.element("time")} />
        </div>

        <Button
          onClick={onClickUpdate}
          size={"md"}
          className={bem.element("btn")}
        >
          Обновить курсы
        </Button>
      </div>
    </Head>
  );
};
