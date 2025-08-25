import React from 'react';

function StepItem({ record, onDelete }) {
  return (
    <tr>
      <td>{record.date}</td>
      <td>{record.steps}</td>
      <td>
        <button onClick={() => onDelete(record.date)}>Delete</button>
      </td>
    </tr>
  );
}

export default StepItem;
