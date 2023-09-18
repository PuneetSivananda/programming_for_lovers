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
  tempList.push({ name: objectA.name, age: objectA.age });
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
    output.push({
      name: arr[obj].name,
      age: arr[obj].age,
    });
  }
}
var args = process.argv;
console.log(
  "Pass asc as the third arg for getting the list sorted in ascending order"
);
const sortedOutput = output.sort((item1, item2) => {
  if (args[2] == "asc") {
    return item1.age - item2.age;
  }
  return item2.age - item1.age;
});

console.log(sortedOutput);
