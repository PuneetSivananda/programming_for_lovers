function mutation(arr) {
  const a1 = Array.from(new Set(arr[0].toLowerCase()));
  const a2 = Array.from(new Set(arr[1].toLowerCase()));
  let flag = false;
  a2.every((item) => {
    if (a1.indexOf(item) > 0) flag = true;
    else {
      flag = false;
      return;
    }
  });
  return flag;
}

console.log(mutation(["hello", "Hello"]));
// console.log(mutation(["floor", "for"]));
