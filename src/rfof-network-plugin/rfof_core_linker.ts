export class RFOFCoreLinker {
  private links: Map<string, string[]> = new Map();

  registerNode(nodeId: string) {
    if (!this.links.has(nodeId)) {
      this.links.set(nodeId, []);
    }
  }

  linkNodes(source: string, target: string) {
    if (!this.links.has(source)) this.registerNode(source);
    this.links.get(source)?.push(target);
    console.log(`[RFOF] Linked ${source} → ${target}`);
  }

  getLinks(nodeId: string): string[] {
    return this.links.get(nodeId) || [];
  }
}
