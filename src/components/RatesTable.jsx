import React from 'react';
import { useFlash } from '../hooks/useFlash';
import './RatesTable.css';

const TableRow = ({ item }) => {
  const bidFlash = useFlash(item.bid);
  const askFlash = useFlash(item.ask);

  return (
    <tr className="rate-row">
      <td className="col-name">{item.name}</td>
      <td className="col-unit">{item.unit}</td>
      <td className={`col-bid text-green orbitron ${bidFlash}`}>
        {item.bid.toFixed(2)}
      </td>
      <td className={`col-ask text-amber orbitron ${askFlash}`}>
        {item.ask.toFixed(2)}
      </td>
    </tr>
  );
};

export default function RatesTable({ title, data }) {
  return (
    <div className="rates-table-container card">
      <div className="table-header glow-box-amber orbitron">
        <h2>{title}</h2>
      </div>
      
      <table className="rates-table">
        <thead>
          <tr className="orbitron text-dim">
            <th className="th-left">COMMODITY</th>
            <th className="th-center">UNIT</th>
            <th className="th-right">BID</th>
            <th className="th-right">ASK</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <TableRow key={idx} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
