import React, { useRef, useEffect, useState } from "react";
import "./App.css";

// 0. Install dependencies
// npm i @tensorflow/tfjs @tensorflow-models/qna react-loader-spinner

// 1. Import dependencies
import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Fragment } from "react";

const App = () => {
  // 3. Setup references and state hooks
  const passageRef = useRef(null);
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState();
  const [model, setModel] = useState(null);

  // 4. Load Tensorflow Model
  const loadModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    console.log("Model Loaded");
  };

  // 5. Handle Questions
  const answerQuestion = async (e) => {};

  useEffect(() => {
    loadModel();
  }, []);

  // 2. Setup input, question and result area
  return (
    <div className="App">
      Hello World
      <Loader />
    </div>
  );
};

export default App;
