export async function fetchNeurons() {
  const res = await fetch('/data/neurons.json');
  return res.json();
}
