import { linkGLB, registerImpulseTexture } from '@RFOF-NETWORK';
import { activatePRAIAI, defineCortexZones } from '@PRAIAI';

// Pfade zu neuronalen GLB-Modellen
const glbPaths = {
  neuronnet: './glb-export/neuronnet.glb',
  cortex: './glb-export/cortex.glb',
  synapse: './glb-export/synapse.glb'
};

// Matrix-Grün Impuls-Textur
const impulseTexture = './gh-pages/impulse_texture.png';

// Linke die Modelle ins neuronale Netzwerk
linkGLB(glbPaths.neuronnet);
linkGLB(glbPaths.cortex);
linkGLB(glbPaths.synapse);

// Registriere die Impuls-Textur
registerImpulseTexture(impulseTexture);

// Aktiviere PRAIAI mit Cortex-Zonen
activatePRAIAI({
  cortex: true,
  impulse: true,
  manifest: './data/manifest.schema.json'
});

// Definiere symbolische Cortex-Zonen
defineCortexZones([
  { id: 'CortexL', function: 'logic', color: '#00ff00' },
  { id: 'CortexM', function: 'memory', color: '#00ff00' },
  { id: 'Cortex_X', function: 'meta', color: '#00ff00' }
]);

console.log('✅ GLB-Modelle erfolgreich mit RFOF-NETWORK und PRAIAI verbunden.');
