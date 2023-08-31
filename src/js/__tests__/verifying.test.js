import verifyPaymentSystem from '../verifying';

test.each([
  ['371449635398431', 'ames'],
  ['30569309025904', 'diners_club'],
  ['6011111111111117', 'discover'],
  ['3530111333300000', 'jcb'],
  ['5555555555554444', 'master'],
  ['4111111111111111', 'visa'],
  ['2202205022897836', 'mir'],
  ['92202205022897836', 'undefined'],
])('Card number %s is %s payment system', (recived, expected) => {
  expect(verifyPaymentSystem(recived)).toBe(expected);
});
