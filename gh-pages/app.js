📄 api.js

`js
export async function fetchNeurons() {
  const res = await fetch('https://yourdomain.com/data/neurons.json');
  return res.json();
}
`

