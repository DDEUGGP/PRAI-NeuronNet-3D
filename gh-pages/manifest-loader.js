export async function loadManifest() {
  const res = await fetch('/data/manifest.schema.json');
  return res.json();
}
