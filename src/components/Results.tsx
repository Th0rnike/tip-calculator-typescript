import ResetButton from "./ResetButton";
import ResultBox from "./ResultBox";

interface resultsInterface {
  bill: number;
  people: number;
  customValue: number;
  tip: number;
  setBill: (arg: number) => void;
  setPeople: (arg: number) => void;
  setTip: (arg: number) => void;
}

const Results: React.FC<resultsInterface> = ({
  bill,
  people,
  customValue,
  tip,
  setBill,
  setPeople,
  setTip,
}) => {
  const chooseTipValue = customValue !== 0 ? customValue : tip;
  const totalPrice = (bill / people).toFixed(2);
  const choosePeopleValue = bill && people ? totalPrice : "$0.00";

  const tipValue =
    bill && people && chooseTipValue
      ? (((bill / people) * chooseTipValue) / 100).toFixed(2)
      : 0;

  const tipAmount = bill && people && tipValue ? tipValue : "$0.00";

  console.log(typeof choosePeopleValue);

  return (
    <div className="results">
      <div className="results-tip">
        <ResultBox title="Tip Amount" amount={tipAmount} />
        <ResultBox title="Total" amount={choosePeopleValue} />
      </div>
      <ResetButton setBill={setBill} setPeople={setPeople} setTip={setTip} />
    </div>
  );
};

export default Results;
