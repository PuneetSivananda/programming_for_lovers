const obj = {
  a: {
    nested: { child: "value" },
  },
  b: "value1",
};

console.log(loopThroughJSON(obj));

function loopThroughJSON(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      if (Array.isArray(obj[key])) {
        // loop through array
        for (let i = 0; i < obj[key].length; i++) {
          loopThroughJSON(obj[key][i]);
        }
      } else {
        // call function recursively for object
        loopThroughJSON(obj[key]);
      }
    } else {
      // do something with value
      console.log(key + ": " + obj[key]);
    }
  }
}
