import ResetButton from "./ResetButton";
import ResultBox from "./ResultBox";

interface resultsInterface {
  bill: number;
  people: number;
  tipValue: number;
  totalPrice: number;
  reset: () => void;
}

const Results: React.FC<resultsInterface> = ({
  bill,
  people,
  tipValue,
  totalPrice,
  reset,
}) => {
  const chooseTipValue = Number(
    bill && tipValue && people ? tipValue : "$0.00"
  );
  const choosePeopleValue = Number(bill && people ? totalPrice : "$0.00");
  return (
    <div className="results">
      <div className="results-tip">
        <ResultBox title="Tip Amount" amount={chooseTipValue} />
        <ResultBox title="Total" amount={choosePeopleValue} />
      </div>
      <ResetButton onClick={reset} />
    </div>
  );
};

export default Results;
