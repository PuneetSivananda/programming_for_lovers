// Problem Statement: To find out how many times the letters in the word "banana" appear in the given string "bawnartenyabtyanuiaurnwaananab"
// Input String: "bawnartenyabtyanuiaurnwaananab"
// Output: banana banana banana

function findBananaStrings(inputString) {
  let unique = Array.from(new Set("banana"));
  inputString.split("").forEach((letter) => {
    if (unique.includes(letter)) {
      console.log(`${letter}: banana`);
    }
  });
  return;
}

findBananaStrings("bawnartenyabtyanuiaurnwaananab");
