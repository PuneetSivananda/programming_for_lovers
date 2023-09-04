function mutation(arr) {
  const a1 = Array.from(new Set(arr[0]));
  const a2 = Array.from(new Set(arr[1]));
  let flag = false;
  a2.every((item) => {
    if (a1.includes(item)) flag = true;
    else {
      flag = false;
      return false;
    }
  });
  return flag;
}

console.log(mutation(["hello", "neo"]));
console.log(mutation(["floor", "for"]));
