import React from "react";
import "./result.css"

interface resBoxInterface {
  title: string;
  amount: string;
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
