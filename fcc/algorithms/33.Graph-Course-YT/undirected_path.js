function buildGraph(edges) {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}
function hasPath(graph, start, dest, visited) {
  if (start == dest) {
    return true;
  }
  if (visited.has(start)) {
    return false;
  }
  visited.add(start);
  for (let neigh of graph[start]) {
    if (hasPath(graph, neigh, dest, visited)) {
      return true;
    }
  }
  return false;
}

function undirected_path(edges, start, dest) {
  // Convert to adjacency list
  //   do dfs or bfs
  let visited = new Set();
  const graph = buildGraph(edges);
  // dfs
  return hasPath(graph, start, dest, visited);
}

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

undirected_path(edges, "j", "m");
