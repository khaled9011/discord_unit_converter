/////////// CONVERSIONS /////////////

const milesToKm = (miles) => {
  return miles * 1.60934;
};

const kmToMiles = (km) => {
  return km / 1.60934;
};

const celsiusToFarenheit = (c) => {
  return (c * 9) / 5 + 32;
};

const farenheitToCelsius = (f) => {
  return ((f - 32) * 5) / 9;
};

const cmToFeetandInches = (cm) => {
  const ft = Math.floor(cm / 30.48);
  const inches = Math.floor((cm / 30.48 - ft) * 12);
  return `${ft}'${inches}`;
};

const metersToFeetandInches = (m) => {
  return cmToFeetandInches(100 * m);
};

const feetandInchesToCm = (ftandInch) => {
  const arr = ftandInch.split("'");
  return Math.floor(parseInt(arr[0]) * 30.48 + parseInt(arr[1]) * 2.54);
};

const feetandInchesToMeters = (ftandInch) => {
  return feetandInchesToCm(ftandInch) / 100;
};

const lbsToKg = (lbs) => {
  return Math.floor(lbs / 2.205);
};

const kgsToLbs = (kg) => {
  return Math.floor(kg * 2.205);
};

///////////////// REGEX //////////////////

const holyRegex = /^[0-9]+( )*((kg)|(lbs)|(m)|(c)|(f)|(meter)){1}$/gi;
const filthyFtRegex = /^[0-9]+((')|(ft)|(feet))[0-9]*((")|(in)|(inches))?$/gi;

////////////////// CLEAN UP CREW //////////////

module.exports = {
  holyRegex,
  filthyFtRegex,
  kgsToLbs,
  lbsToKg,
  celsiusToFarenheit,
  farenheitToCelsius,
  milesToKm,
  kmToMiles,
};
