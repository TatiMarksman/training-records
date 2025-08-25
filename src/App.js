import React, { useState } from 'react';
import StepForm from './StepForm';
import StepList from './StepList';

function App() {
  const [records, setRecords] = useState([]);

  const handleAdd = (date, kilometers, steps) => {
    setRecords(prev => {
      const existing = prev.find(r => r.date === date);
      if (existing) {
        // aynı tarihe ekleme
        return prev.map(r => 
          r.date === date ? { 
            ...r, 
            kilometers: r.kilometers + kilometers,
            steps: r.steps + steps 
          } : r
        ).sort((a, b) => new Date(b.date) - new Date(a.date));
      } else {
        return [...prev, { date, kilometers, steps }]
          .sort((a, b) => new Date(b.date) - new Date(a.date));
      }
    });
  };

  const handleDelete = (date) => {
    setRecords(prev => prev.filter(r => r.date !== date));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Training Records</h1>
      <StepForm onAdd={handleAdd} />
      <StepList records={records} onDelete={handleDelete} />
    </div>
  );
}

export default App;
