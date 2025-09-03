import React from 'react';

export default function NeuronNode({ id, type, onClick }) {
  return (
    <div className={`neuron-node ${type}`} onClick={() => onClick(id)}>
      <span>{id}</span>
    </div>
  );
}
