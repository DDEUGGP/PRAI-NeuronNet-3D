const SynapseEngine = require('../core/synapse.engine');

test('transmit signal', () => {
  const engine = new SynapseEngine();
  engine.transmit('hello');
});
