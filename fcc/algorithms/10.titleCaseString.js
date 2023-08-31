function titleCase(str) {
  const ans = str.split(" ").map((element) => {
    const smaller = element.toLowerCase();
    return smaller[0].toUpperCase() + smaller.substring(1);
  });
  return ans.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
