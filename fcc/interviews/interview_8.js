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

function processChild(item) {
  const sampleData = [];
  for (let j = 0; j < item.length; j++) {
    if (typeof item.child == "object") {
      sampleData.push(processChild(item.child));
    }
  }
  return sampleData;
}

let output = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].child) {
    let sample = processChild(arr[i]);
    output.push(sample);
  } else {
    output.push(arr[i]);
  }

  // sort out the item based on the value
  output.forEach((item) => {
    console.log(item.name);
  });
}
