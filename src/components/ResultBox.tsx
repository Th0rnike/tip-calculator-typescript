import React from "react";

interface resBoxInterface {
  title: string;
  amount: number;
}

const ResultBox: React.FC<resBoxInterface> = ({ amount, title }) => {
  return (
    <div className="results-box">
      <div>
        <p>{title}</p>
        <p className="per">/person</p>
      </div>
      <div>
        <h2 className="inputed-number">{amount}</h2>
      </div>
    </div>
  );
};

export default ResultBox;
