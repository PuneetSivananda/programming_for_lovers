function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";
  let returnString = "";
  for (let i = 1; i <= num; i++) {
    returnString += str;
  }
  return returnString;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", -2));
