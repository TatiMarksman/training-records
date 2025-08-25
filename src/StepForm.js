import React, { useState } from 'react';

function StepForm({ onAdd }) {
  const [date, setDate] = useState('');
  const [kilometers, setKilometers] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || (!kilometers && !steps)) return;
    
    // Eğer sadece kilometre girilmişse, adım sayısını hesapla (ortalama 1312 adım/km)
    let calculatedSteps = steps;
    if (kilometers && !steps) {
      calculatedSteps = Math.round(Number(kilometers) * 1312);
    }
    
    // Eğer sadece adım girilmişse, kilometreyi hesapla
    let calculatedKilometers = kilometers;
    if (steps && !kilometers) {
      calculatedKilometers = (Number(steps) / 1312).toFixed(2);
    }
    
    onAdd(date, Number(calculatedKilometers) || 0, Number(calculatedSteps) || 0);
    setDate('');
    setKilometers('');
    setSteps('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Дата (ДД.ММ.ГГ):
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Пройдено км:
          </label>
          <input
            type="number"
            step="0.1"
            value={kilometers}
            onChange={(e) => setKilometers(e.target.value)}
            placeholder="0.0"
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '100px' }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Шаги:
          </label>
          <input
            type="number"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="0"
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '100px' }}
          />
        </div>
        
        <div style={{ alignSelf: 'end' }}>
          <button 
            type="submit" 
            style={{ 
              padding: '8px 16px', 
              borderRadius: '4px', 
              border: 'none', 
              backgroundColor: '#007bff', 
              color: 'white',
              cursor: 'pointer'
            }}
          >
            OK
          </button>
        </div>
      </div>
    </form>
  );
}

export default StepForm;
