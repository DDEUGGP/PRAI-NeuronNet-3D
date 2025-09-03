import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function loadNeuronModel(scene, path) {
  const loader = new GLTFLoader();
  loader.load(path, (gltf) => {
    scene.add(gltf.scene);
  });
}
