interface InputInterface {
  bill: number;
  setBill: (val: number) => void;
  billError: boolean;
  billValidation: React.KeyboardEventHandler<HTMLInputElement>;
}

const InputContainer: React.FC<InputInterface> = ({
  bill,
  setBill,
  billError,
  billValidation,
}) => {
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
