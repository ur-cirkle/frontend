import React, { useEffect, useState } from "react";

export interface InterestSelectionProps {
  interests: Array<string>;
  onSignup: (selectedInterests: Array<string>) => void;
}

const InterestSelection: React.FC<InterestSelectionProps> = ({
  interests,
  onSignup,
}) => {
  const [selectedInterests, setSelectedInterest] = useState<Array<string>>([]);
  const [counter, setCounter] = useState<number>(0);
  const [customInput, setCustomInputs] = useState<Array<string>>([
    "",
    "",
    "",
    "",
    "",
  ]);
  const onInterestSelect = (interestId: string) => {
    const idIndex = selectedInterests.indexOf(interestId);
    const filledInputs = customInput.filter((value) => value).length;
    if (selectedInterests.length + filledInputs >= 5 && idIndex === -1) {
      alert("Max Limit Reached");
      return;
    }

    if (idIndex === -1) {
      setSelectedInterest((prevSelectedInterest) => [
        ...prevSelectedInterest,
        interestId,
      ]);
      setCounter(counter - 1);
    } else {
      const tempArr = selectedInterests;
      tempArr.splice(idIndex, 1);
      setSelectedInterest(tempArr);
      setCounter(counter + 1);
    }
    console.log(selectedInterests);
  };
  const onCustomInput = (value: string, index: number) => {
    const tempCustomInputArr = customInput;
    tempCustomInputArr[index] = value;
    setCustomInputs(tempCustomInputArr);
    setCounter(counter + 1);
  };
  useEffect(() => {
    console.log(selectedInterests.length);
  }, [selectedInterests]);
  return (
    <div className="interest">
      <h1>Select Interest</h1>
      {interests.map((interest) => (
        <button
          onClick={() => onInterestSelect(interest)}
          style={{
            backgroundColor:
              selectedInterests.indexOf(interest) > -1
                ? "yellow"
                : "transparent",
          }}
        >
          {interest}
        </button>
      ))}

      {selectedInterests.length <= 4 && (
        <input
          value={customInput[0]}
          onChange={({ target }) => onCustomInput(target.value, 0)}
        />
      )}
      {selectedInterests.length <= 3 && (
        <input
          value={customInput[1]}
          onChange={({ target }) => onCustomInput(target.value, 1)}
        />
      )}
      {selectedInterests.length <= 2 && (
        <input
          value={customInput[2]}
          onChange={({ target }) => onCustomInput(target.value, 2)}
        />
      )}
      {selectedInterests.length <= 1 && (
        <input
          value={customInput[3]}
          onChange={({ target }) => onCustomInput(target.value, 3)}
        />
      )}
      {selectedInterests.length <= 0 && (
        <input
          value={customInput[4]}
          onChange={({ target }) => onCustomInput(target.value, 4)}
        />
      )}
      <button
        onClick={() =>
          onSignup([
            ...customInput.filter((value) => value),
            ...selectedInterests,
          ])
        }
      >
        Done
      </button>
    </div>
  );
};

export default InterestSelection;
