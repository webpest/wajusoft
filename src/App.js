import { useState } from "react";
import useStickyState from "./use-sticky";
function App() {
  const [input, setInput] = useState();
  const [numberList, setNumberList] = useStickyState([], "list");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNumberList = [...numberList, { number: input, isChecked: false }];
    const maxNum = Math.max.apply(
      Math,
      newNumberList.map(function (list) {
        return list.number;
      })
    );
    const minNum = Math.min.apply(
      Math,
      newNumberList.map(function (list) {
        return list.number;
      })
    );

    const maxNumIndex = newNumberList.findIndex(
      (list) => Number(list.number) === Number(maxNum)
    );

    const minNumIndex = newNumberList.findIndex(
      (list) => Number(list.number) === Number(minNum)
    );
    const highestNum = newNumberList.splice(maxNumIndex, 1);
    const lowestNum = newNumberList.splice(minNumIndex, 1);

    setNumberList([...highestNum, ...newNumberList, ...lowestNum]);
    setInput("");
  };

  const handleCheckbox = (num) => {
    const updatedState = numberList.map((list, i) => {
      if (list.number === num) {
        return { ...list, isChecked: !list.isChecked };
      }

      return list;
    });

    setNumberList(updatedState);
  };

  return (
    <div className="w-25 mx-auto mt-4">
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
            Add
          </button>
        </div>
      </form>
      <ul className="list-group my-2">
        {numberList.map((list, i) => (
          <li key={i} className="list-group-item">
            <div>
              <input
                className="form-check-input me-1 "
                type="checkbox"
                checked={numberList[i].isChecked}
                value={list.number}
                onChange={(e) => handleCheckbox(list.number)}
              />
              <label
                className="form-check-label"
                style={{
                  textDecoration: numberList[i].isChecked
                    ? "line-through"
                    : "none",
                }}
              >
                {list.number}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
