import * as THREE from 'three';

export function createCortexGeometry() {
  const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
  const material = new THREE.MeshStandardMaterial({ color: 0xf4a142 });
  return new THREE.Mesh(geometry, material);
}
