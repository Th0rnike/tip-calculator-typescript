import { useEffect, useState } from "react";
import "./App.css";
// import logo from "./assets/logo.svg";

function App() {
  const [bill, setBill] = useState<number>(200);
  const [people, setPeople] = useState<number>(2);
  const [tip, setTip] = useState<number>(0);
  const [customValue, setCustomValue] = useState<number>(0);

  const chooseTipValue = customValue !== 0 ? customValue : tip;
  const tipValue = Number(
    (((bill / people) * chooseTipValue) / 100).toFixed(2)
  );
  console.log(tipValue);

  const totalPrice = Number((bill / people).toFixed(2));
  const tipsArray = [5, 10, 15, 25, 50];

  const updatePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.valueAsNumber;
    setPeople(val);
  };

  const updateTip = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const val = Number(target.textContent?.split("%")[0]);
    setTip(val);
    setCustomValue(0)
  };

  const customTip = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.valueAsNumber;
    setCustomValue(val);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === ".") {
      e.preventDefault();
    }
  };

  const reset = () => {
    setBill(0);
    setPeople(0);
    setTip(0);
  };

  // console.log("render");

  return (
    <div>
      <div>
        <label htmlFor="bill">Bill</label>
        <input
          type="number"
          id="bill"
          placeholder="0"
          onChange={(e) => setBill(e.target.valueAsNumber)}
          value={bill ? bill : ""}
        />
      </div>
      <div>
        <span>Select Tip %</span>
        {tipsArray.map((t) => (
          <button key={crypto.randomUUID()} onClick={updateTip}>
            {t + "%"}
          </button>
        ))}
        <input
          className="button"
          type="number"
          placeholder="Custom"
          onChange={customTip}
          onKeyDown={handleKeyDown}
          value={customValue ? customValue : ""}
        />
      </div>
      <div>
        <label htmlFor="people">Number of People</label>
        <input
          type="number"
          placeholder="0"
          onChange={updatePeople}
          onKeyDown={handleKeyDown}
          value={people ? people : ""}
        />
      </div>
      <div>Tip Amount {bill && chooseTipValue && people ? tipValue : ""}</div>
      <div>Total {bill && people ? totalPrice : ""}</div>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
