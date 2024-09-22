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

function shortest_path(nodeA, nodeB) {
  const graph = buildGraph(edges);
  const visited = new Set([nodeA]);
  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    let [curr, dist] = queue.shift();
    if (curr === nodeB) {
      return dist;
    }
    for (let neigh of graph[curr]) {
      // when ever adding to q
      if (!visited.has(neigh)) {
        visited.add(neigh);
        queue.push([neigh, dist + 1]);
      }
    }
  }
  return -1;
}

console.log(shortest_path("w", "y"));
