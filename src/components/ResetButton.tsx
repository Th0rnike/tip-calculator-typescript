import React from "react";

interface resetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<resetButtonProps> = ({ onClick }) => {
  return (
    <button className="reset" onClick={onClick}>
      reset
    </button>
  );
};

export default ResetButton;
