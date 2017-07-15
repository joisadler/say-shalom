import shalom from '../src/index';

test('shalom', () => {
  expect(shalom()).toEqual('Shalom, World!');
});
