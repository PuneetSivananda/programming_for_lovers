import "./styles.css";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <input onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          let sampleData = items;
          sampleData.push(value);
          setItems(sampleData);
        }}
      >
        Add
      </button>

      {items != null && items.length > 0 ? (
        <div>
          {items.map((i) => {
            return (
              <li key={i}>
                {i} - <button>delete</button>
              </li>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
