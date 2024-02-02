import { useState } from "react";
import "./App.css";
// import logo from "./assets/logo.svg";

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(2);
  const [tip, setTip] = useState<number>(0);
  const [customValue, setCustomValue] = useState<number>(0);
  const [billError, setBillError] = useState<boolean>(false);
  const [peopleError, setPeopleError] = useState<boolean>(false);

  const chooseTipValue = customValue !== 0 ? customValue : tip;
  const tipValue = Number(
    (((bill / people) * chooseTipValue) / 100).toFixed(2)
  );

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
    setCustomValue(0);
  };

  const customTip = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.valueAsNumber;
    setCustomValue(val);
  };

  const handleErrorKeys: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key >= "a" && e.key <= "z") {
      e.preventDefault();
      setBillError(true);
    }
    if (e.key >= "!" && e.key <= ")") {
      e.preventDefault();
      setBillError(true);
    }
    if (e.key === "-" || e.key === "+") {
      e.preventDefault();
      setBillError(true);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === ".") {
      e.preventDefault();
    }
    if (e.key >= "a" && e.key <= "z") {
      e.preventDefault();
      setPeopleError(true);
    }
    if (e.key >= "!" && e.key <= ")") {
      e.preventDefault();
      setPeopleError(true);
    }
    if (e.key === "-" || e.key === "+") {
      e.preventDefault();
      setPeopleError(true);
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
        {billError ? <span className="error">Numbers Only</span> : ""}
        <label htmlFor="bill">Bill</label>
        <input
          type="number"
          id="bill"
          placeholder="0"
          onKeyDown={handleErrorKeys}
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
        {peopleError ? <span className="error">Numbers Only</span> : ""}
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
