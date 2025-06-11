import axios from "axios";

export interface TransactionDetail {
  product: string;
  company: string;
  is_reversal: boolean;
  value: number;
}

export interface Transaction {
  sale: TransactionDetail;
  refund: TransactionDetail;
}

export interface InvoiceData {
  invoice: string;
  transaction: Transaction;
}

export async function fetchTransactions(): Promise<InvoiceData[]> {
  const response = await axios.get<InvoiceData[]>(
    "http://localhost:3001/api/vendas/devolvidos"
  );

  return response.data;
}
