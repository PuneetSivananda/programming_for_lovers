const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstPrint(graph, "a");

function depthFirstPrint(graph, start) {
  console.log(start);
  for (let neigh of graph[start]) {
    depthFirstPrint(graph, neigh);
  }
}
