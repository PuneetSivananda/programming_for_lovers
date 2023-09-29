function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    const charCode = n.charCodeAt(i);
    if (charCode === 69) {
      return sum;
    }
    sum += charCode;
  }
  return sum;
}

console.log(sum_char_codes("arealrlyreallulongpassword"));
