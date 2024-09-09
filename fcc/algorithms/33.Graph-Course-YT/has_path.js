const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

function hasPath(graph, src, dest) {
  if (src == dest) {
    return true;
  }
  for (let neigh of graph[src]) {
    if (hasPath(graph, neigh, dest)) {
      return true;
    }
  }
  return false;
}
console.log(hasPath(graph, "a", "e"));
