import React, { useState, SetStateAction, Dispatch, useEffect } from "react";
export interface InterestProps {
  interest: {
    id: string;
    interest: string;
  };
  onInterestSelect: (interestId: string) => void;
}

const Interest: React.FC<InterestProps> = ({ interest, onInterestSelect }) => {
  return (
    <div className="">
      <button onClick={() => onInterestSelect(interest.id)}>
        {interest.interest}
      </button>
    </div>
  );
};

export default Interest;
