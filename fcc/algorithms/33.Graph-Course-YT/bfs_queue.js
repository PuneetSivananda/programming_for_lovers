const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

breadthFirstPrint(graph, "a");

function breadthFirstPrint(graph, start) {
  const queue = [start];
  // array shift, push

  while (queue.length > 0) {
    let curr = queue.shift();
    console.log(curr);
    for (let neigh of graph[curr]) {
      queue.push(neigh);
    }
  }
}
