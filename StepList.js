import React from 'react';
import StepItem from './StepItem';

function StepList({ steps, onDeleteStep, onUpdateStep }) {
  if (steps.length === 0) {
    return (
      <div className="step-list">
        <h2>Eğitim Adımları</h2>
        <p className="no-steps">Henüz eğitim adımı eklenmemiş.</p>
      </div>
    );
  }

  return (
    <div className="step-list">
      <h2>Eğitim Adımları ({steps.length})</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <StepItem
            key={step.id}
            step={step}
            index={index + 1}
            onDelete={onDeleteStep}
            onUpdate={onUpdateStep}
          />
        ))}
      </div>
    </div>
  );
}

export default StepList;
