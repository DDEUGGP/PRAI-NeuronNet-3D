import * as THREE from 'three';

export function initThreeScene(canvasId) {
  const canvas = document.getElementById(canvasId);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  camera.position.z = 5;
  return { scene, camera, renderer };
}
