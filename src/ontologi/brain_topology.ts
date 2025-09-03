import { MemoryCortex } from '../core/cortex.memory';

test('store and retrieve thought', () => {
  const cortex = new MemoryCortex();
  cortex.storeThought('key', 'value');
  expect(cortex.retrieveThought('key')).toBe('value');
});
