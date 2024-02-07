import React from "react";

interface resetButtonProps {
  setBill: (arg: number) => void;
  setPeople: (arg: number) => void;
  setTip: (arg: number) => void;
}

const ResetButton: React.FC<resetButtonProps> = ({
  setBill,
  setPeople,
  setTip,
}) => {
  const reset = () => {
    setBill(0);
    setPeople(0);
    setTip(0);
  };

  return (
    <button className="reset" onClick={reset}>
      reset
    </button>
  );
};

export default ResetButton;
