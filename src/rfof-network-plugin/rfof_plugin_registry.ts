export class RFOFPluginRegistry {
  private plugins: Map<string, any> = new Map();

  registerPlugin(name: string, instance: any) {
    this.plugins.set(name, instance);
    console.log(`[RFOF] Plugin "${name}" registered.`);
  }

  getPlugin(name: string): any {
    return this.plugins.get(name);
  }

  listPlugins(): string[] {
    return Array.from(this.plugins.keys());
  }
}
