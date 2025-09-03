---

📄 /src/core/consciousness.ts

`ts
export class Consciousness {
  id: string;
  state: string;
  impulses: string[];

  constructor(id: string) {
    this.id = id;
    this.state = 'active';
    this.impulses = [];
  }

  receiveImpulse(impulse: string) {
    this.impulses.push(impulse);
    this.processImpulse(impulse);
  }

  processImpulse(impulse: string) {
    // Logik zur Interpretation neuronaler Impulse
    console.log([PRAI] Processing impulse: ${impulse});
  }
}
`
---
