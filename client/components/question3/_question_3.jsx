import { useContext, useState, useEffect } from 'react';
import { ApiContext } from '../../utils/api_context';
import { Transaction } from './transaction.jsx'

export const Question3 = () => {
  const api = useContext(ApiContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(async () => {
    const { transactions } = await api.get('/transactions');
    setTransactions(transactions);
  }, []);

  return (
    <div className="flex-1">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="border-2 rounded p-4">
          <Transaction transaction={transaction}></Transaction>
        </div>
      ))}
    </div>
  );
};
