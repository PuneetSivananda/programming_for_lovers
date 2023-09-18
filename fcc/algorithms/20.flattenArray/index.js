// flatten the array and sort desc by age
// ['A', 'B', 'F', 'C', 'D', 'E']
const arr = [
  {
    name: "A",
    age: 60,
    child: [
      {
        name: "B",
        age: 40,
      },
      {
        name: "C",
        age: 30,
        child: [
          {
            name: "D",
            age: 14,
          },
          {
            name: "E",
            age: 5,
          },
        ],
      },
    ],
  },
  {
    name: "F",
    age: 35,
  },
];

const tempList = [];
function processChild(objectA) {
  tempList.push(objectA.name);
  if (objectA["child"]) {
    objectA["child"].forEach(processChild);
  }
  return tempList;
}

let output = [];
for (obj in arr) {
  if (arr[obj].child) {
    let result = processChild(arr[obj]);
    output.push(...result);
  } else {
    output.push(arr[obj].name);
  }
}
console.log(output);
