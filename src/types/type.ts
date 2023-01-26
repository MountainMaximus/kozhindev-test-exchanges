export interface ExchangeState {
  currency: ISO;
  amount: number;
}
export interface currenciesInitialState {
  rates: { [index: string]: number };
  status: Status;
}
export interface AxiosAnswer {
  date: string;
  base: string;
  rates: { [index: string]: number };
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export enum ISO {
  RUB = "Российский рубль",
  AUD = "Австралийский доллар",
  AZN = "Азербайджанский манат",
  GBP = "Фунт стерлингов",
  AMD = "Армянский драм",
  BYN = "Белорусский рубль",
  BGN = "Болгарский лев",
  BRL = "Бразильский реал",
  HUF = "Венгерский форинт",
  VND = "Донг",
  HKD = "Гонконгский доллар",
  GEL = "Грузинский лари",
  DKK = "Датская крона",
  AED = "Дирхам ОАЭ",
  USD = "Доллар США",
  EUR = "Евро",
  EGP = "Египетский фунт",
  INR = "Индийская рупия",
  IDR = "Индонезийская рупия",
  JPY = "Японская йена",
  CNY = "Китайский юань",
}