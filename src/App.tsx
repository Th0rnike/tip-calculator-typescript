import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [customValue, setCustomValue] = useState<number>(0);
  const [billError, setBillError] = useState<boolean>(false);
  const [customError, setCustomError] = useState<boolean>(false);
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

  const errorForBill: React.KeyboardEventHandler = (e) => {
    if (e.key >= "a" && e.key <= "z") {
      e.preventDefault();
      setBillError(true);
      setTimeout(() => setBillError(false), 400);
    }
    if (e.key >= "!" && e.key <= ")") {
      e.preventDefault();
      setBillError(true);
      setTimeout(() => setBillError(false), 400);
    }
    if (e.key === "-" || e.key === "+") {
      e.preventDefault();
      setBillError(true);
      setTimeout(() => setBillError(false), 400);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === ".") {
      e.preventDefault();
      setPeopleError(true);
      setTimeout(() => {
        setPeopleError(false);
      }, 400);
    }
    if (e.key >= "a" && e.key <= "z") {
      e.preventDefault();
      setPeopleError(true);
      setTimeout(() => {
        setPeopleError(false);
      }, 400);
    }
    if (e.key >= "!" && e.key <= ")") {
      e.preventDefault();
      setPeopleError(true);
      setTimeout(() => {
        setPeopleError(false);
      }, 400);
    }
    if (e.key === "-" || e.key === "+") {
      e.preventDefault();
      setPeopleError(true);
      setTimeout(() => {
        setPeopleError(false);
      }, 400);
    }
  };

  const handleCustomError: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === ".") {
      e.preventDefault();
      setCustomError(true);
      setTimeout(() => setCustomError(false), 1000);
    }
    if (e.key >= "a" && e.key <= "z") {
      e.preventDefault();
      setCustomError(true);
      setTimeout(() => setCustomError(false), 1000);
    }
    if (e.key >= "!" && e.key <= ")") {
      e.preventDefault();
      setCustomError(true);
      setTimeout(() => setCustomError(false), 1000);
    }
    if (e.key === "-" || e.key === "+") {
      e.preventDefault();
      setCustomError(true);
      setTimeout(() => setCustomError(false), 1000);
    }
  };

  const reset = () => {
    setBill(0);
    setPeople(0);
    setTip(0);
  };

  // useEffect

  return (
    <div className="App">
      <img className="image" src={logo} alt="" />
      <div className="container">
        <div className="input-div">
          <div className="input-container">
            {
              <span data-value={billError ? "error" : "invicible"}>
                Numbers Only
              </span>
            }
            <label htmlFor="bill">Bill</label>
            <input
              data-borderBill={billError ? "error" : "invicible"}
              type="number"
              id="bill"
              placeholder="0"
              onKeyDown={errorForBill}
              onChange={(e) => setBill(e.target.valueAsNumber)}
              value={bill ? bill : ""}
            />
          </div>
          <div className="buttons-container">
            <span>Select Tip %</span>
            {tipsArray.map((t) => (
              <button key={crypto.randomUUID()} onClick={updateTip}>
                {t + "%"}
              </button>
            ))}
            <input
              className={customError ? "button shake" : "button"}
              type="number"
              placeholder="Custom"
              onChange={customTip}
              onKeyDown={handleCustomError}
              value={customValue ? customValue : ""}
            />
          </div>
          <div className="input-container">
            <span data-value={peopleError ? "error" : "invicible"}>
              Numbers Only
            </span>
            <label htmlFor="people">Number of People</label>
            <input
              data-borderPeople={peopleError ? "error" : "invicible"}
              type="number"
              placeholder="0"
              onChange={updatePeople}
              onKeyDown={handleKeyDown}
              value={people ? people : ""}
            />
          </div>
        </div>
        <div className="results">
          <div>
            Tip Amount {bill && chooseTipValue && people ? tipValue : ""}
          </div>
          <div>Total {bill && people ? totalPrice : ""}</div>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
