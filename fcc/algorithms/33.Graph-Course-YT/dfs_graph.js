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
  const stack = [start];
  while (stack.length > 0) {
    let curr = stack.pop();
    console.log(curr);
    for (let neigh of graph[curr]) {
      stack.push(neigh);
    }
  }
}
