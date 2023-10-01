console.log("Hello from tensorflow");

async function getData() {
  // const carsDataResponse = await fetch(
  //   "https://storage.googleapis.com/tfjs-tutorials/carsData.json"
  // ).then((data) => data.json());
  const localJson = await fetch("./data/input.json").then((resp) =>
    resp.json()
  );

  const cleaned = localJson
    .map((car) => ({
      mpg: car.Miles_per_Gallon,
      horsepower: car.Horsepower,
    }))
    .filter((car) => car.mpg != null && car.horsepower != null);

  return cleaned;
}

const createModel = () => {
  const model = tf.sequential(); // sequential model
  model.add(
    tf.layers.dense({
      inputShape: [1],
      units: 1,
      useBias: true,
    })
  ); // add a single input layer
  model.add(
    tf.layers.dense({
      units: 1,
      useBias: true,
    })
  ); // model output layer
  return model;
};

async function run() {
  const data = await getData();
  const values = data.map((d) => ({
    x: d.horsepower,
    y: d.mpg,
  }));
  tfvis.render.scatterplot(
    { name: "Horsepower v MPG" },
    { values },
    {
      xLabel: "Horsepower",
      yLabel: "MPG",
      height: 300,
    }
  );
}

document.addEventListener("DOMContentLoaded", run);
