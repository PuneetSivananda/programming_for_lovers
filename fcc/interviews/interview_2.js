function addTwoString(a, b) {
  console.log(parseFloat(a) + parseFloat(b));
}
addTwoString("1273676726716627628761872682", "3");
addTwoString("10", "3");

function reverseString(sample) {
  let lengthString = sample.length;
  output = "";
  for (let i = lengthString; i > 0; i--) {
    output = output + sample[i - 1];
  }
  console.log(output);
}
reverseString("1273676726716627628761872682");
