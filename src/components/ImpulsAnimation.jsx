import React, { useEffect } from 'react';

export default function ImpulseAnimation({ active }) {
  useEffect(() => {
    if (active) {
      // Trigger animation logic
    }
  }, [active]);

  return <div className={`impulse ${active ? 'active' : ''}`}></div>;
}
