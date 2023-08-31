export default function isValid(number) {
  if (number === undefined) {
    return false;
  }
  let checksumm = 0;
  let bEven = false;

  for (let index = number.length - 1; index >= 0; index -= 1) {
    let nDigit = parseInt(number.charAt(index), 10);

    /* eslint no-cond-assign: "error" */
    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }

    checksumm += nDigit;
    bEven = !bEven;
  }

  return checksumm % 10 === 0;
}
