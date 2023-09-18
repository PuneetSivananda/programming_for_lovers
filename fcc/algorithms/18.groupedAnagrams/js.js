function get_anagrams(list_of_words) {
  result = {};
  list_of_words.forEach((element) => {
    const x = element.split("").sort().join("");
    if (result[x] == undefined) {
      result[x] = [element];
    } else {
      result[x].push(element);
    }
  });
  return result;
}

console.log(get_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
