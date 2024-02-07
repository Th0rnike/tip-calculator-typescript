import { useState } from "react";

interface InputInterface {
  bill: number;
  setBill: (val: number) => void;
  handleInputError: (
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => void;
}

const InputContainer: React.FC<InputInterface> = ({
  bill,
  setBill,
  handleInputError,
}) => {
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

  const [billError, setBillError] = useState<boolean>(false);

  return (
    <div className="input-container">
      {<span data-value={billError ? "error" : "invicible"}>Numbers Only</span>}
      <label htmlFor="bill">Bill</label>
      <input
        data-border-bill={billError ? "error" : "invicible"}
        type="number"
        id="bill"
        placeholder="0"
        onKeyDown={billValidation}
        onChange={(e) => setBill(e.target.valueAsNumber)}
        value={bill ? bill : ""}
      />
    </div>
  );
};

export default InputContainer;
