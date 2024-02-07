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

  const handleInputError = (
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 500);
  };

  const errorForBill: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (
      (e.key >= "a" && e.key <= "z") ||
      (e.key >= "!" && e.key <= ")") ||
      e.key === "-" ||
      e.key === "+"
    ) {
      handleInputError(setBillError, e);
    }
  };

  const errorForPeople: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (
      e.key === "." ||
      (e.key >= "a" && e.key <= "z") ||
      (e.key >= "!" && e.key <= ")") ||
      e.key === "-" ||
      e.key === "+"
    ) {
      handleInputError(setPeopleError, e);
    }
  };

  const handleCustomError: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (
      e.key === "." ||
      (e.key >= "a" && e.key <= "z") ||
      (e.key >= "!" && e.key <= ")") ||
      e.key === "-" ||
      e.key === "+"
    ) {
      handleInputError(setCustomError, e);
    }
  };

  const reset = () => {
    setBill(0);
    setPeople(0);
    setTip(0);
  };

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
              data-border-bill={billError ? "error" : "invicible"}
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
            {[5, 10, 15, 25, 50].map((t, index) => (
              <button
                // className={current ? "tip-button active" : "tip-button"}
                style={{
                  backgroundColor:
                    customValue !== 0
                      ? "rgba(0, 71, 75, 1)"
                      : tip === t
                      ? "rgba(159, 232, 223, 1)"
                      : "rgba(0, 71, 75, 1)",
                }}
                className="tip-button"
                key={index}
                onClick={updateTip}
              >
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
              data-border-people={peopleError ? "error" : "invicible"}
              type="number"
              placeholder="0"
              id="people"
              onChange={updatePeople}
              onKeyDown={errorForPeople}
              value={people ? people : ""}
            />
          </div>
        </div>
        <div className="results">
          <div className="results-tip">
            <div className="results-box">
              <div>
                <p>Tip Amount</p>
                <p className="per">/person</p>
              </div>
              <div>
                <h2 className="inputed-number">
                  {bill && chooseTipValue && people ? tipValue : "$0.00"}
                </h2>
              </div>
            </div>
            <div className="results-box">
              <div>
                <p>Total</p>
                <p className="per">/person</p>
              </div>
              <div>
                <h2 className="inputed-number">
                  {bill && people ? totalPrice : "$0.00"}
                </h2>
              </div>
            </div>
          </div>
          <button className="reset" onClick={reset}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
