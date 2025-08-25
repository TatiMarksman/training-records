import React from 'react';

function StepItem({ record, onDelete }) {
  // Tarihi DD.MM.YYYY formatına çevir
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <tr>
      <td style={{ padding: '10px', border: '1px solid #ddd' }}>
        {formatDate(record.date)}
      </td>
      <td style={{ padding: '10px', border: '1px solid #ddd' }}>
        {record.kilometers ? record.kilometers.toFixed(1) : '0.0'}
      </td>
      <td style={{ padding: '10px', border: '1px solid #ddd' }}>
        {record.steps ? record.steps.toLocaleString() : '0'}
      </td>
      <td style={{ padding: '10px', border: '1px solid #ddd' }}>
        <button 
          onClick={() => onDelete(record.date)}
          style={{ 
            marginRight: '5px',
            padding: '2px 6px',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          title="Edit"
        >
          ✏️
        </button>
        <button 
          onClick={() => onDelete(record.date)}
          style={{ 
            padding: '2px 6px',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
          title="Delete"
        >
          ❌
        </button>
      </td>
    </tr>
  );
}

export default StepItem;
