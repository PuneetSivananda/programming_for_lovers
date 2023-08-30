function truncateString(str, num) {
  let returnString;
  if (str.length > num) returnString = "".concat(str.slice(0, num), "...");
  if (str.length == num || str.length < num) returnString = str;
  return returnString;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket", 8));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
