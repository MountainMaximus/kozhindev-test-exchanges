import { useBem, useDispatch } from "@steroidsjs/core/hooks";
import { setExchangeParameters } from "actions/exchanger";
import React from "react";
import { getStore } from "reducers/store";
import { ISO, pailoadExchange } from "types/type";
import { useSelector } from "@steroidsjs/core/hooks";
import Button from "@steroidsjs/core/ui/form/Button/Button";
import "./ExchangeForm.scss";
export const ExchangeField: React.FC = ({}) => {
  const bem = useBem("ExchangeField");
  const menuRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { currencies, exchanger } = useSelector(getStore);
  const [selectedCurrency, setSelectedCurrency] = React.useState(ISO.RUB);
  const [showMenu, setShowMenu] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>("");

  /*Обработка клика вне блока выбора вают*/
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as MouseEvent & {
        path: Node[];
      };

      if (menuRef.current && !_event.path.includes(menuRef.current)) {
        setShowMenu(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);
  /*Обновление input при изменении курса валют или параметров конвертации */
  React.useEffect(() => {
    const globalCurrency = Object.keys(ISO).find(
      (key) => ISO[key] === exchanger.currency
    );
    const localCurrency = Object.keys(ISO).find(
      (key) => ISO[key] === selectedCurrency
    );

    if (currencies.rates[localCurrency] && currencies.rates[globalCurrency])
      setInputValue(
        "" +
          (exchanger.amount * currencies.rates[globalCurrency]) /
            currencies.rates[localCurrency]
      );
  }, [exchanger, currencies.rates]);

  /*Смена  конвертируемой валюты*/
  const onClickListItem = (key: keyof typeof ISO) => {
    setSelectedCurrency(ISO[key]);
    dispatchParametrs({ currency: ISO[key], amount: +inputValue });
    setShowMenu(false);
  };
  /*Смена  конвертируемой валюты*/
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(",", ".");
    if (value.split("").filter((el) => el === ".").length < 2) {
      setInputValue(value);
      if (value[value.length - 1] !== ".")
        dispatchParametrs({
          currency: selectedCurrency,
          amount: +value,
        });
    }
  };
  /**Отправка параметров в redux */
  const dispatchParametrs = ({ currency, amount }: pailoadExchange) => {
    dispatch(
      setExchangeParameters({
        currency,
        amount: +amount,
      })
    );
  };

  return (
    <div className={bem.block()}>
      <input
        onChange={onChangeInput}
        onKeyPress={(e) => {
          if (!/[0-9,.]/.test(e.key)) {
            e.preventDefault();
          }
        }}
        value={inputValue}
        placeholder="Введите сумму"
        type="text"
      />
      <div ref={menuRef} className={bem.element("menu")}>
        <Button
          onClick={() => setShowMenu(!showMenu)}
          color="secondary"
          label={Object.keys(ISO).find((key) => ISO[key] === selectedCurrency)}
          size="Large"
          className={bem.element("btn")}
        />

        {showMenu && (
          <div className={bem.element("sort")}>
            <ul>
              {Object.keys(currencies.rates).map((key) => (
                <li
                  key={key}
                  onClick={() => onClickListItem(key as keyof typeof ISO)}
                  className={ISO[key] === selectedCurrency ? "active" : ""}
                >
                  {ISO[key]}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
