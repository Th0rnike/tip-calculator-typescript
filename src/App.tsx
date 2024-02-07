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

  const billValidation: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (
      (e.key >= "a" && e.key <= "z") ||
      (e.key >= "!" && e.key <= ")") ||
      e.key === "-" ||
      e.key === "+"
    ) {
      handleInputError(setBillError, e);
    }
  };

  const peopleValidation: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
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

  const customButtonValidation: React.KeyboardEventHandler<HTMLInputElement> = (
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
          <InputContainer
            bill={bill}
            billError={billError}
            billValidation={billValidation}
            setBill={setBill}
          />
          <ButtonsContainer
            customError={customError}
            customTip={customTip}
            customValue={customValue}
            customButtonValidation={customButtonValidation}
            tip={tip}
            updateTip={updateTip}
          />
          <PeopleContainer
            peopleValidation={peopleValidation}
            people={people}
            peopleError={peopleError}
            updatePeople={updatePeople}
          />
        </div>
        <Results
          bill={bill}
          people={people}
          reset={reset}
          tipValue={tipValue}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
}

export default App;
