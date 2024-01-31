import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);

  const totalPrice = (bill / people).toFixed(1);
  const tipValue = ((bill / people) * tip) / 100;

  const tipsArray = [5, 10, 15, 25, 50];

  // const updateBill = (e) => {
  //   let val = e.target.value;
  //   console.log(val);
  //   setBill(val);
  // };

  // const updatePeople = (e) => {
  //   let val = e.target.value;
  //   console.log(val);
  //   setPeople(val);
  // };

  const updateTip = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const val = Number(target.textContent?.split("%")[0]);
    setTip(val);
  };

  return (
    <div>
      <div>
        <label htmlFor="bill">Bill</label>
        <input
          type="number"
          id="bill"
          placeholder="0"
          onChange={(e) => setBill(e.target.valueAsNumber)}
          value={!bill ? "" : bill}
        />
      </div>
      <div>
        <span>Select Tip %</span>
        {tipsArray.map((t) => (
          <button key={crypto.randomUUID()} onClick={updateTip}>
            {t + "%"}
          </button>
        ))}
      </div>
      <div>
        <label htmlFor="people">Number of People</label>
        <input
          type="number"
          placeholder="0"
          onChange={(e) => setPeople(e.target.valueAsNumber)}
          value={!people ? "" : people}
        />
      </div>

      <div>Tip Amount {bill && tipValue}</div>
      <div>Total {bill && people ? totalPrice : ""}</div>
    </div>
  );
}

export default App;
