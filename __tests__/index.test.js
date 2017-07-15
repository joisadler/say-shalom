import shalom from '../dist/index';

test('shalom', () => {
  expect(shalom()).toEqual('Shalom, World!');
});
