import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { CurrentJwtContext } from "../Contexts/CurrentJwtContext";
export interface InterestSelectionProps {
  interests: Array<{ interest: string; id: string }>;
  onSignup: (selectedInterests: Array<Array<string>>) => void;
}

const InterestSelection: React.FC<InterestSelectionProps> = ({
  interests,
  onSignup,
}) => {
  const [selectedInterests, setSelectedInterest] = useState<Array<string>>([]);
  const [customInterest, setCustomInterest] = useState<string>("");
  const onInterestSelect = (interestId: string) => {
    const idIndex = selectedInterests.indexOf(interestId);
    if (
      customInterest.split(",").length - 1 + selectedInterests.length >= 5 &&
      idIndex === -1
    ) {
      alert("Max Limit Reached");
      return;
    }

    if (idIndex === -1) {
      setSelectedInterest((prevSelectedInterest) => [
        ...prevSelectedInterest,
        interestId,
      ]);
    } else {
      const tempArr = selectedInterests;
      tempArr.splice(idIndex, 1);
      setSelectedInterest(tempArr);
    }
  };
  const onCustomInterestChange = (value: string) => {
    if (
      customInterest.split(",").length - 1 + selectedInterests.length >= 5 &&
      customInterest.length < value.length
    ) {
      return;
    }
    setCustomInterest(value);
  };
  return (
    <div className="interest">
      <h1>Select Interest</h1>
      {interests.map((interest) => (
        <button
          onClick={() => onInterestSelect(interest.id)}
          style={{
            backgroundColor:
              selectedInterests.indexOf(interest.id) > -1
                ? "yellow"
                : "transparent",
          }}
        >
          {interest.interest}
        </button>
      ))}
      <input
        type="text"
        value={customInterest}
        onChange={({ target }) => onCustomInterestChange(target.value)}
      />
      <button
        onClick={() =>
          onSignup([
            selectedInterests,
            customInterest
              .split(",")
              .filter((interest) => interest.length >= 1),
          ])
        }
      >
        Done
      </button>
    </div>
  );
};

export default InterestSelection;
