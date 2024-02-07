import React, { useState } from "react";

interface ButtonsInterface {
  customValue: number;
  tip: number;
  updateTip: (e: React.MouseEvent<HTMLButtonElement>) => void;
  customTip: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputError: (
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => void;
}

const ButtonsContainer: React.FC<ButtonsInterface> = ({
  customTip,
  customValue,
  tip,
  updateTip,
  handleInputError,
}) => {
  const [customError, setCustomError] = useState<boolean>(false);

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

  return (
    <div className="buttons-container">
      <span>Select Tip %</span>
      {[5, 10, 15, 25, 50].map((t, index) => (
        <button
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
        onKeyDown={customButtonValidation}
        value={customValue ? customValue : ""}
      />
    </div>
  );
};

export default ButtonsContainer;
