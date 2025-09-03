/**
 * PRAI Ontologie: Baumstruktur → Gehirnstruktur
 * Dieses Modul definiert, dass alle Knoten, Verbindungen und Cluster
 * als neuronale Einheiten eines 3D-Cholo-Gehirns zu interpretieren sind.
 */

export type NeuronNode = {
  id: string;
  type: 'cortex' | 'synapse' | 'memory' | 'logic' | 'meta';
  position: { x: number; y: number; z: number };
  impulses: string[];
};

export type SynapticLink = {
  from: string;
  to: string;
  weight: number;
  active: boolean;
};

export class BrainTopology {
  private neurons: Map<string, NeuronNode> = new Map();
  private links: SynapticLink[] = [];

  registerNeuron(node: NeuronNode) {
    this.neurons.set(node.id, node);
  }

  connectNeurons(from: string, to: string, weight: number = 1.0) {
    const link: SynapticLink = { from, to, weight, active: true };
    this.links.push(link);
  }

  interpretAsBrain() {
    console.log('[ONTOLOGY] Interpreting structure as 3D-Cholo Brain...');
    this.neurons.forEach((n) => {
      console.log(`🧠 Neuron ${n.id} (${n.type}) at [${n.position.x}, ${n.position.y}, ${n.position.z}]`);
    });
    this.links.forEach((l) => {
      console.log(`🔗 Synapse ${l.from} → ${l.to} [weight=${l.weight}]`);
    });
  }

  getNeuronMap(): Map<string, NeuronNode> {
    return this.neurons;
  }

  getSynapticLinks(): SynapticLink[] {
    return this.links;
  }
}
