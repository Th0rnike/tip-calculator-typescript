import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import InputContainer from "./components/InputContainer";
import ButtonsContainer from "./components/ButtonsContainer";
import PeopleContainer from "./components/PeopleContainer";
import Results from "./components/Results";

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [customValue, setCustomValue] = useState<number>(0);

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

  return (
    <div className="App">
      <img className="image" src={logo} alt="" />
      <div className="container">
        <div className="input-div">
          <InputContainer
            bill={bill}
            setBill={setBill}
            handleInputError={handleInputError}
          />
          <ButtonsContainer
            customTip={customTip}
            customValue={customValue}
            tip={tip}
            updateTip={updateTip}
            handleInputError={handleInputError}
          />
          <PeopleContainer
            people={people}
            updatePeople={updatePeople}
            handleInputError={handleInputError}
          />
        </div>
        <Results
          bill={bill}
          people={people}
          tipValue={tipValue}
          totalPrice={totalPrice}
          setBill={setBill}
          setPeople={setPeople}
          setTip={setTip}
        />
      </div>
    </div>
  );
}

export default App;
