// const year = 2019;
// const remainder = year % 4;
// if (remainder == 0) {
//   console.log('Your year is a leap year.');
// }
// else {
//   console.log('Your year is not a leap year.');
// }

// ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)

function isLeapYear(year) {
  const remainder = year % 4;
  const remainder2 = year % 100;
  const remainder3 = year % 400;

  if (((remainder == 0) && (remainder2 != 0)) || (remainder3 == 0)) {
    return true;
  } else {
    return false;
  }
}

// The years 1600, 2000 and 2400 are leap years, 
// while 1700, 1800, 1900, 2100, 2200 and 2300 are not leap years

const checkLeapYear = isLeapYear(2020);
console.log(checkLeapYear);