export default function verifyPaymentSystem(cardNumber) {
  const regexp = /^(\d{2}).*/;
  let result = cardNumber.match(regexp);
  result = Number(result[1]);

  if (result >= 20 && result < 30) {
    return 'mir';
  }
  if (result >= 40 && result < 50) {
    return 'visa';
  }
  if (result >= 51 && result <= 55) {
    return 'master';
  }
  if (result === 60) {
    return 'discover';
  }
  if (result === 30 || result === 36 || result === 38) {
    return 'diners_club';
  }
  if (result === 31 || result === 35) {
    return 'jcb';
  }
  if (result === 34 || result === 37) {
    return 'ames';
  }
  return 'undefined';
}
