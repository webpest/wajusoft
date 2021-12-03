// Input that accept only numbers
// Add number to list after button press
import { useState } from "react";

function App() {
  const [input, setInput] = useState();
  const [numberList, setNumberList] = useState([]);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNumberList = [...numberList, { number: input, isChecked: false }];
    // const highest = Math.max(...numberList);
    // console.log(highest);
    // console.log(newNumberList)
    console.log(newNumberList);
    setNumberList(newNumberList);
    setInput("");
  };

  return (
    <div className="w-25 mx-auto">
      <ul className="list-group my-2">
        {numberList.map((list, i) => (
          <li key={i} className="list-group-item">
            <div>
              <input className="form-check-input me-1" type="checkbox" />
              {list.number}
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            className="form-control"
            aria-describedby="button-addon2"
            value={input}
            id="inputNumber"
            type="number"
            onChange={handleInputChange}
            autoComplete="false"
          />
          <button className="btn btn-primary" type="submit" id="button-addon2">
            Button
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
