// “()”
// "(]"
// “()[]{}”
// “([])”

// use a stack to implement this

function balancedBrackets(characters) {
  const stack = [];
  for (let i = 0; i <= characters.length; i++) {
    if (characters[i] == "(" || characters[i] == "{" || characters[i] == "[") {
      stack.push(characters[i]);
      continue;
    }

    let check = stack.pop();
    switch (check) {
      case "(":
        if (characters[i] == "]" || characters[i] == "}") {
          return false;
        }
        break;
      case "[":
        if (characters[i] == ")" || characters[i] == "}") {
          return false;
        }
        break;
      case "{":
        if (characters[i] == "]" || characters[i] == ")") {
          return false;
        }
        break;
    }
  }
  return stack.length == 0;
}

console.log(balancedBrackets("[{()}]") ? "Balanced" : "Not Balanced");
console.log(balancedBrackets("[]{}()") ? "Balanced" : "Not Balanced");
