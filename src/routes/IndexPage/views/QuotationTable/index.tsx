import { useSelector } from "@steroidsjs/core/hooks";
import React from "react";
import { getRates } from "reducers/currencies";
import { RootState } from "reducers/store";
import { COLL, ISO } from "types/type";

export const QuotationTable: React.FC = () => {
  const { rates } = useSelector(getRates);

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">{COLL.NUM}</th>
            <th scope="col">{COLL.ISO}</th>
            <th scope="col">{COLL.NAME}</th>
            <th scope="col">{COLL.RUB}</th>
            <th scope="col">{COLL.USD}</th>
            <th scope="col">{COLL.EUR}</th>
            <th scope="col">{COLL.CNY}</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(rates).map((key, index) => (
            <tr key={key}>
              <td>{index + 1}</td>
              <td>{key}</td>
              <td>{ISO[key]}</td>
              <td>{rates[key]}</td>
              <td>{rates[key] * rates["USD"]}</td>
              <td>{rates[key] * rates["EUR"]}</td>
              <td>{rates[key] * rates["CNY"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
