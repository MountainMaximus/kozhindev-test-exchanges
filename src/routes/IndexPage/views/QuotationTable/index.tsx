import { useSelector } from "@steroidsjs/core/hooks";
import Button from "@steroidsjs/core/ui/form/Button/Button";
import React from "react";
import { getRates } from "reducers/currencies";
import { COLL, ISO } from "types/type";
export const QuotationTable: React.FC = () => {
  const { rates } = useSelector(getRates);
  const [countRow, setCountRow] = React.useState(5);
  const [sortParams, setSortParams] = React.useState({
    column: COLL.NUM,
    direction: 1,
  });
  const [searchValue, setSearchValue] = React.useState("");
  console.log(sortParams);

  /**Функция клика по колонке */
  const onClikCollumn = (column: string) => {
    if (sortParams.column === column)
      setSortParams({ column, direction: -sortParams.direction });
    else setSortParams({ column, direction: 1 });
  };
  /**Функция сортировки */
  const comparisonCondition = (a: string | number, b: string | number) => {
    const { direction, column } = sortParams;
    switch (column) {
      case COLL.ISO:
        return a > b ? direction : -direction;
      case COLL.NAME:
        return ISO[a] > ISO[b] ? direction : -direction;
      case COLL.NUM:
        return a > b ? 1 : -1;

      default:
        return (rates[a] - rates[b]) * direction;
    }
  };
  /**Функция поиска */
  const searchCondition = (item: string) => {
    const row = [
      item,
      ISO[item],
      rates[item],
      rates[item] * rates["USD"],
      rates[item] * rates["EUR"],
      rates[item] * rates["CNY"],
    ];
    let result = false;
    row.forEach((item) => {
      if (String(item).toUpperCase().indexOf(searchValue.toUpperCase()) >= 0)
        result = true;
    });
    return result;
  };
  return (
    <>
      <div style={{ textAlign: "center", margin: 20, fontSize: 30 }}>
        Таблица конвертации валют
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <span>Введите фразу поиска:</span>
        <div style={{ position: "relative" }}>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Поиск..."
          />

          {searchValue && (
            <svg
              onClick={(e) => setSearchValue("")}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: 18,
                height: 18,
                opacity: 0.3,
                position: "absolute",
                right: 15,
                top: 15,
              }}
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          )}
        </div>
      </div>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            {Object.entries(COLL).map(([key, value]) => (
              <th
                onClick={() => onClikCollumn(value)}
                key={key}
                scope="col"
                style={{ cursor: `pointer` }}
              >
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(rates)
            .slice(0, countRow)
            .filter(searchCondition)
            .sort(comparisonCondition)
            .map((key, index) => (
              <tr key={key}>
                <td>{index + 1}</td>
                <td>{key}</td>
                <td>{ISO[key]}</td>
                <td>{rates[key]}</td>
                <td>{rates[key] / rates["USD"]}</td>
                <td>{rates[key] / rates["EUR"]}</td>
                <td>{rates[key] / rates["CNY"]}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {countRow < Object.keys(rates).length && (
          <Button
            onClick={() => setCountRow(countRow + 5)}
            color="primary"
            label="Показать больше"
            size="Large"
            className="m-2"
          />
        )}
        {countRow > 5 && (
          <Button
            onClick={() => setCountRow(5)}
            color="secondary"
            label="Скрыть записи"
            size="Large"
            className="m-2"
          />
        )}
      </div>
    </>
  );
};
