import React from "react";

interface PeopleInterface {
  peopleError: boolean;
  updatePeople: (e: React.ChangeEvent<HTMLInputElement>) => void;
  peopleValidation: React.KeyboardEventHandler<HTMLInputElement>;
  people: number;
}

const PeopleContainer: React.FC<PeopleInterface> = ({
  peopleValidation,
  people,
  peopleError,
  updatePeople,
}) => {
  return (
    <div className="input-container">
      <span data-value={peopleError ? "error" : "invicible"}>Numbers Only</span>
      <label htmlFor="people">Number of People</label>
      <input
        data-border-people={peopleError ? "error" : "invicible"}
        type="number"
        placeholder="0"
        id="people"
        onChange={updatePeople}
        onKeyDown={peopleValidation}
        value={people ? people : ""}
      />
    </div>
  );
};

export default PeopleContainer;
