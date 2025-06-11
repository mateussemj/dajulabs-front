import React, { useEffect, useState } from "react";
import TransactionsTable from "./components/TransactionsTable";
import { fetchTransactions, InvoiceData } from "./api";
import "./App.css";

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

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header
        style={{
          backgroundColor: "#282c34",
          padding: "20px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Dashboard de Transações</h1>
      </header>

      <main style={{ flex: 1, padding: "20px" }}>
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <>
            <h2>Transações de Vendas e Estornos</h2>
            <TransactionsTable data={data} />
          </>
        )}
      </main>

      <footer
        style={{
          backgroundColor: "#f1f1f1",
          textAlign: "center",
          padding: "10px",
          borderTop: "1px solid #ccc",
        }}
      >
        <small>© {new Date().getFullYear()} Mateus Silva - Todos os direitos reservados</small>
      </footer>
    </div>
  );
}

export default App;
