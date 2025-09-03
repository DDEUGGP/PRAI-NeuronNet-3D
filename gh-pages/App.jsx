📄 App.jsx

`jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div className="matrix-green">
      <h1>PRAI NeuronNet 🌿</h1>
      <canvas id="neuronCanvas"></canvas>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
`

