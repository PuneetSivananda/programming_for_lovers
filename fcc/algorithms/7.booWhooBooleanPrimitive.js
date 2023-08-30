function booWho(bool) {
  return Boolean(bool);
}

console.log(booWho(null));
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ a: 1 }));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho(true));
console.log(booWho("false"));
