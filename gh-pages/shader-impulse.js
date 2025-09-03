import * as THREE from 'three';

export function createImpulseMaterial(texturePath) {
  const texture = new THREE.TextureLoader().load(texturePath);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  const material = new THREE.MeshBasicMaterial({ map: texture });
  return material;
}
