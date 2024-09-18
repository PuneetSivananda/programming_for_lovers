const graph = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};

const exploreSize = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);
  let size = 1;
  for (let neigh of graph[node]) {
    size += exploreSize(graph, neigh, visited);
  }
  return size;
};

const largestComponent = (graph) => {
  const visited = new Set();
  let largestVisited = 0;

  for (let node in graph) {
    let size = exploreSize(graph, node, visited);
    if (size > largestVisited) {
      largestVisited = size;
    }
  }
  return largestVisited;
};

console.log(largestComponent(graph));
