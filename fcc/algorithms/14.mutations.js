function mutation(arr) {
  const a1 = Array.from(new Set(arr[0].toLowerCase()));
  const a2 = Array.from(new Set(arr[1].toLowerCase()));
  for (let i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i] < 0)) return false;
  }
  return true;
}

console.log(mutation(["hello", "Hello"]));
// console.log(mutation(["floor", "for"]));
