import React from "react";

interface ButtonsInterface {
  customValue: number;
  tip: number;
  updateTip: (e: React.MouseEvent<HTMLButtonElement>) => void;
  customError: boolean;
  customTip: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customButtonValidation: React.KeyboardEventHandler<HTMLInputElement>;
}

const ButtonsContainer: React.FC<ButtonsInterface> = ({
  customError,
  customTip,
  customValue,
  customButtonValidation,
  tip,
  updateTip,
}) => {
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
