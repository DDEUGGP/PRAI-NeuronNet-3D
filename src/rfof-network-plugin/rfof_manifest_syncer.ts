import fs from 'fs';

export class RFOFManifestSyncer {
  private manifestPath: string;

  constructor(path: string) {
    this.manifestPath = path;
  }

  syncManifest() {
    const content = fs.readFileSync(this.manifestPath, 'utf-8');
    console.log(`[RFOF] Manifest synced:\n${content}`);
    return JSON.parse(content);
  }
}
