import React, { useEffect, useState } from "react";
import TransactionsTable from "./components/TransactionsTable";
import { fetchTransactions, InvoiceData } from "./api";

function App() {
  const [data, setData] = useState<InvoiceData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTransactions()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Transactions</h1>
      <TransactionsTable data={data} />
    </div>
  );
}

export default App;
