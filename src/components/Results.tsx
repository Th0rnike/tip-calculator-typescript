import ResetButton from "./ResetButton";
import ResultBox from "./ResultBox";

interface resultsInterface {
  bill: number;
  people: number;
  tipValue: number;
  totalPrice: number;
  setBill: (arg: number) => void;
  setPeople: (arg: number) => void;
  setTip: (arg: number) => void;
}

const Results: React.FC<resultsInterface> = ({
  bill,
  people,
  tipValue,
  totalPrice,
  setBill,
  setPeople,
  setTip,
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
      <ResetButton setBill={setBill} setPeople={setPeople} setTip={setTip} />
    </div>
  );
};

export default Results;
