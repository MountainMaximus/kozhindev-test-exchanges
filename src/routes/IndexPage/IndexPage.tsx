import * as React from "react";

import "./IndexPage.scss";
import { useBem } from "@steroidsjs/core/hooks";

import { Header } from "./views/Header";
import { QuotationTable } from "./views/QuotationTable";
import { ExchangeForm } from "./views/ExchangeForm";

export default function IndexPage() {
  const bem = useBem("IndexPage");

  return (
    <div className={bem.block()}>
      <Header />
      <QuotationTable />
      <ExchangeForm />
    </div>
  );
}
