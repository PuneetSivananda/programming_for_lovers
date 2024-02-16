// Input String: aaabaccdeee
// Output String: 4a1b2c1d3e

function printCountChars(inputString) {
  let data = {};
  inputString.split("").forEach((item) => {
    if (data[item] == undefined) data[item] = 1;
    else data[item] += 1;
  });
  let outPutString = "";
  for (let [key, value] of Object.entries(data)) {
    outPutString += value;
    outPutString += key;
  }
  return outPutString;
}

console.log(printCountChars("aaabaccdeee"));
