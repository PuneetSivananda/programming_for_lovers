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
  const [answers, setAnswers] = useState();
  const [model, setModel] = useState(null);

  // 4. Load Tensorflow Model
  const loadModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    console.log("Model Loaded");
  };

  // 5. Handle Questions
  const answerQuestion = async (e) => {
    if(e.which === 13 && model !=null){
      console.log('Question Submitted')
      const passage = passageRef.current.value
      const question = questionRef.current.value
      const answers = await model.findAnswers(question, passage)
      setAnswers(answers)
      console.log(answers)
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  // 2. Setup input, question and result area
  return (
    <div className="App">
      <header className="App-header"> 
        {model == null?
        <div>
          <div>Model Loading</div>  
          <Loader 
            type={"Puff"}
            color={"#00BFFF"}
            height={100}
            width={100}
          />
        </div>
        :
        <Fragment>
          Passage
          <textarea ref={passageRef} rows="30" cols="100"></textarea>
          Ask a Question
          <input ref={questionRef} onKeyPress={answerQuestion} size="80"/>
          Answer
            {answers?answers.map((ans, idx)=><div><b>Answer {idx+1} - </b>{ans.text}{ans.score}</div>):""}
        </Fragment>}
      </header>
    </div>
  );
};

export default App;
