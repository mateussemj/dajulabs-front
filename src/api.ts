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
  transacation: Transaction;
}

export function fetchTransactions(): Promise<InvoiceData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          invoice: "346991",
          transacation: {
            sale: {
              product: "252013",
              company: "2",
              is_reversal: false,
              value: 8,
            },
            refund: {
              product: "252013",
              company: "2",
              is_reversal: true,
              value: 8,
            },
          },
        },
        // Pode colocar mais itens para teste
      ]);
    }, 500);
  });
}
