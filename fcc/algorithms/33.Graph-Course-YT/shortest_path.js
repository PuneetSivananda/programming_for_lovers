const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

function buildGraph(edges) {
  let graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (graph[a] == undefined) {
      graph[a] = [];
    }
    if (graph[b] == undefined) {
      graph[b] = [];
    }
    // if (!(a in graph)) {
    //   graph[a] = [];
    // }
    // if (!(b in graph)) {
    //   graph[b] = [];
    // }
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

function shortest_path() {
  const graph = buildGraph(edges);
  console.log(graph);
}
console.log(shortest_path());
