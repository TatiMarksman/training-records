import React from 'react';
import StepItem from './StepItem';

function StepList({ records, onDelete }) {
  if (records.length === 0) {
    return (
      <div>
        <h2>Training Records</h2>
        <p>No records yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Training Records</h2>
      <div style={{ 
        border: '2px solid #ddd', 
        borderRadius: '8px', 
        padding: '20px', 
        marginTop: '20px',
        backgroundColor: '#f9f9f9'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>
                Дата (ДД.ММ.ГГ)
              </th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>
                Пройдено км
              </th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>
                Шаги
              </th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>
                Действия
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <StepItem
                key={record.date}
                record={record}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StepList;
