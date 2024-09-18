const graph = {
  3: [],
  4: ["6"],
  6: ["4", "5", "7", "8"],
  8: ["6"],
  7: ["6"],
  5: ["6"],
  1: ["2"],
  2: ["1"],
};

const explore = (graph, current, visited) => {
  if (visited.has(current)) return false;
  visited.add(current);
  for (let neigh of graph[current]) {
    explore(graph, neigh, visited);
  }
  return true;
};
