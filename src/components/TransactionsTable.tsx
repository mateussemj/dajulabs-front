import React from "react";
import { InvoiceData } from "../api";

interface Props {
  data: InvoiceData[];
}

const headerStyle: React.CSSProperties = {
  border: "1px solid black",
  padding: "8px",
  backgroundColor: "#ddd",
};

const cellStyle: React.CSSProperties = {
  border: "1px solid black",
  padding: "8px",
  textAlign: "center",
};

export default function TransactionsTable({ data }: Props) {
  if (!data || data.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Nenhum par de Venda e Devolução encontrado.</p>;
  }

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={headerStyle}>Nota Fiscal</th>
          <th style={headerStyle}>Produto Vendido</th>
          <th style={headerStyle}>Empresa</th>
          <th style={headerStyle}>Valor da Venda</th>
          <th style={headerStyle}>Produto Retornado</th>
          <th style={headerStyle}>Empresa</th>
          <th style={headerStyle}>Valor do Retorno</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ invoice, transaction }, index) => (
          <tr key={index}>
            <td style={cellStyle}>{invoice}</td>
            <td style={{ ...cellStyle, backgroundColor: "lightgreen" }}>
              {transaction.sale.product}
            </td>
            <td style={{ ...cellStyle, backgroundColor: "lightgreen" }}>
              {transaction.sale.company}
            </td>
            <td style={{ ...cellStyle, backgroundColor: "lightgreen" }}>
              {transaction.sale.value}
            </td>
            <td style={{ ...cellStyle, backgroundColor: "lightcoral" }}>
              {transaction.refund.product}
            </td>
            <td style={{ ...cellStyle, backgroundColor: "lightcoral" }}>
              {transaction.refund.company}
            </td>
            <td style={{ ...cellStyle, backgroundColor: "lightcoral" }}>
              {transaction.refund.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
