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
  const model = tf.sequential(); // create a sequential model
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

/**
 * Convert the input data to tensors for machine learning
 * implement practices like __shuffling__ and __normalizing__ the data.
 */
function convertToTensor(data) {
  return tf.tidy(() => {
    // 1.Shuffle the data
    tf.util.shuffle(data);

    // 2. Convert data to tensor
    const inputs = data.map((d) => d.horsepower);
    const labels = data.map((d) => d.mpg);

    const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);
    // 3. Normalize the data to the range 0-1 using min-max scaling
    const inputMax = inputTensor.max();
    const inputMin = inputTensor.min();
    const labelMax = labelTensor.max();
    const labelMin = labelTensor.min();

    const normalizedInputs = inputTensor
      .sub(inputMin)
      .div(inputMax)
      .sub(inputMin);
    const normalizedLabels = labelTensor
      .sub(labelMin)
      .div(labelMax)
      .sub(labelMin);

    return {
      inputs: normalizedInputs,
      labels: normalizedLabels,
      // return the min/max bounds that can be re-used
      inputMax,
      inputMin,
      labelMax,
      labelMin,
    };
  });
}

async function trainModel(model, inputs, labels) {
  model.compile({
    optimizer: tf.train.adam(),
    loss: tf.losses.meanSquaredError,
    metrice: ["mse"],
  });

  const batchSize = 32;
  const epochs = 50;

  return await model.fit(inputs, labels, {
    batchSize,
    epochs,
    shuffle: true,
    callbacks: tfvis.show.fitCallbacks(
      { name: "Training Performance" },
      ["loss", "mse"],
      { height: 200, callbacks: ["onEpochEnd"] }
    ),
  });
}

async function run() {
  // get data
  const data = await getData();

  // create the model instance
  const model = createModel();
  tfvis.show.modelSummary({ name: "Model Summary" }, model);

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
  // Convert data
  const tensorData = convertToTensor(data);
  const { inputs, labels } = tensorData;
  // Train the model
  await trainModel(model, inputs, labels);
  console.log("Done Training");
  // Make some predictions using the model and compare them to the
  // original data
  testModel(model, data, tensorData);
}

function testModel(model, inputData, normalizationData) {
  const { inputMax, inputMin, labelMin, labelMax } = normalizationData;
  /**
   * Generate predictios for a uniform range of numbers from 0 to 1
   * We un-normalize the data by performing inverse min-max scaling
   * that we did earlier
   */
  const [xs, preds] = tf.tidy(() => {
    const xsNorm = tf.linspace(0, 1, 100);
    const predictions = model.predict(xsNorm.reshape([100, 1]));

    const unNormXs = xsNorm.mul(inputMax.sub(inputMin)).add(inputMin);
    const unNormPreds = predictions.mul(labelMax.sub(labelMin)).add(labelMin);
    // un-normalize the data
    return [unNormXs.dataSync(), unNormPreds.dataSync()];
  });
  const predictedPoints = Array.from(xs).map((val, i) => {
    return { x: val, y: preds[i] };
  });

  const originalPoints = inputData.map((d) => ({
    x: d.horsepower,
    y: d.mpg,
  }));

  tfvis.render.scatterplot(
    { name: "Model Predictions vs Original Data" },
    {
      values: [originalPoints, predictedPoints],
      series: ["original", "predicted"],
    },
    {
      xLabel: "Horsepower",
      yLabel: "MPG",
      height: 300,
    }
  );
}

document.addEventListener("DOMContentLoaded", run);
