import React from 'react';

export default function TooltipMeta({ content }) {
  return (
    <div className="tooltip-meta">
      <pre>{content}</pre>
    </div>
  );
}
