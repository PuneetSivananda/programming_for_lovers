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

function hasPathQ(graph, src, dest) {
  const queue = [src];
  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr == dest) {
      return true;
    }

    for (let neigh of graph[curr]) {
      queue.push(neigh);
    }
  }
  return false;
}

console.log(hasPath(graph, "a", "e"));
console.log(hasPathQ(graph, "a", "e"));
