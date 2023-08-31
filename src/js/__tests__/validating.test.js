import isValid from '../validating';

test.each([
  ['371449635398431', true],
  ['30569309025904', true],
  ['6011111111111117', true],
  ['3530111333300000', true],
  ['5555555555554444', true],
  ['4111111111111111', true],
  ['2202205022897836', true],
  [undefined, false],
])('Card number %s is %s', (received, expected) => {
  expect(isValid(received)).toBe(expected);
});
