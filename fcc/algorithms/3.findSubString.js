// https://www.w3schools.com/jsref/jsref_substr.asp

// we know the substring is should be end, we know length
// check the end contains the substring by retrieving the char and checking with substring
function confirmEnding(str, target) {
  let comp = str.slice(-target.length);
  return comp === target ? true : false;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "n"
  )
);
console.log(
  confirmEnding(
    "Walking on water and developing software from a specification are easy if both are frozen",
    "specification"
  )
);
console.log(confirmEnding("Open sesame", "same"));
