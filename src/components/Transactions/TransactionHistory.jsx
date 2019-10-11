import React from 'react';
import T from 'prop-types';

import './TransactionHistory.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: T.arrayOf(
    T.shape({
      amount: T.string.isRequired,
      currency: T.string.isRequired,
      id: T.string.isRequired,
      type: T.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
