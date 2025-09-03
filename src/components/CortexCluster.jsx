import React from 'react';

export default function CortexCluster({ neurons }) {
  return (
    <div className="cortex-cluster">
      {neurons.map((n) => (
        <NeuronNode key={n.id} id={n.id} type={n.type} onClick={() => {}} />
      ))}
    </div>
  );
}
