import * as THREE from 'three';

export function createNeuronTree(nodes, links) {
  const group = new THREE.Group();
  nodes.forEach((node) => {
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5),
      new THREE.MeshBasicMaterial({ color: 0x42f4c5 })
    );
    sphere.position.set(node.x, node.y, node.z);
    group.add(sphere);
  });
  return group;
}
