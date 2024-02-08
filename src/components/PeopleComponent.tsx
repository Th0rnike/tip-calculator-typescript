import React, { useState } from "react";
import "./people-component.css"

interface PeopleInterface {
  updatePeople: (e: React.ChangeEvent<HTMLInputElement>) => void;
  people: number;
  handleInputError: (
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => void;
}

const PeopleContainer: React.FC<PeopleInterface> = ({
  people,
  updatePeople,
  handleInputError,
}) => {
  const peopleValidation: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (
      e.key === "." ||
      (e.key >= "a" && e.key <= "z") ||
      (e.key >= "!" && e.key <= ")") ||
      e.key === "-" ||
      e.key === "+"
    ) {
      handleInputError(setPeopleError, e);
    }
  };

  const [peopleError, setPeopleError] = useState<boolean>(false);
  

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
