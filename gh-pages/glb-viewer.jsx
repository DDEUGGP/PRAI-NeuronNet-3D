import React, { useEffect } from 'react';
import { initThreeScene } from './three-init.js';
import { loadNeuronModel } from './neuronnet-loader.js';
import { GLB_PATHS } from './config.js';

export default function GLBViewer() {
  useEffect(() => {
    const { scene, camera, renderer } = initThreeScene('neuronCanvas');
    loadNeuronModel(scene, GLB_PATHS.neuronnet);
    renderer.render(scene, camera);
  }, []);

  return <canvas id="neuronCanvas" width="800" height="600"></canvas>;
}
