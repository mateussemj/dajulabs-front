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
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th style={headerStyle}>Invoice</th>
          <th style={headerStyle}>Sale Product</th>
          <th style={headerStyle}>Sale Company</th>
          <th style={headerStyle}>Sale Value</th>
          <th style={headerStyle}>Refund Product</th>
          <th style={headerStyle}>Refund Company</th>
          <th style={headerStyle}>Refund Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ invoice, transacation }, index) => (
          <tr key={index}>
            <td style={cellStyle}>{invoice}</td>
            <td style={{ ...cellStyle, backgroundColor: "lightgreen" }}>
              {transacation.sale.product}
            </td>
            <td style={{ ...cellStyle, backgroundColor: "lightgreen" }}>
              {transacation.sale.company}
            </td>
            <td style={{ ...cellStyle, backgroundColor: "lightgreen" }}>
              {transacation.sale.value}
            </td>
            <td style={{ ...cellStyle, backgroundColor: "lightcoral" }}>
              {transacation.refund.product}
            </td>
            <td style={{ ...cellStyle, backgroundColor: "lightcoral" }}>
              {transacation.refund.company}
            </td>
            <td style={{ ...cellStyle, backgroundColor: "lightcoral" }}>
              {transacation.refund.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
