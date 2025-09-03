import React from 'react';

export default function SynapseLink({ source, target }) {
  return (
    <line
      x1={source.x}
      y1={source.y}
      x2={target.x}
      y2={target.y}
      stroke="#42f4c5"
      strokeWidth="2"
    />
  );
}
