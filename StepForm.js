import React, { useState } from 'react';

function StepForm({ onAdd }) {
  const [date, setDate] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !steps) return;
    onAdd(date, Number(steps));
    setDate('');
    setSteps('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        placeholder="Steps"
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default StepForm;
