import React, { useEffect, useState } from "react";
import {
  SkipForNow,
  ButtonText,
  SearchText, Hobby, Hobby1, HobbyText, HobbyText1,
  SearchBar, Dot,
  NextSymbol,
  TheHeading,
  NextButton,
  Text1,
  YourProfile,
  BioInput
} from "./InsertSelection.styles";
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

  const DpPic =()=>{
    return(
      
      <svg 
      style={{borderRadius: "5rem"}}
      width="4.125rem" height="4.125rem" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="11" cy="11.3" r="10.2" stroke="white" stroke-width="1.6"/>
  <circle cx="11" cy="9.29999" r="4" stroke="white" stroke-width="1.6"/>
  <path d="M15.3392 15.5071C16.4957 16.4208 17.5 16.9999 18.5 17.9999C17.7548 18.729 14.3643 21.5 11 21.5C7.63572 21.5 4.38027 18.9156 3.5 17.9999C3.5 17.9999 5.90886 15.9747 7.13816 15.1616C8 14.5915 9 13.9999 11 13.9999C13 13.9999 14.1827 14.5935 15.3392 15.5071Z" stroke="white" stroke-width="1.6"/>
  </svg>
    )
  }

  const NextSvg = () => {
    return (
      <svg
        style={{ marginLeft: "0.8rem" }}
        width="5"
        height="10"
        viewBox="0 0 5 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.6675 4.99998C4.66781 5.15575 4.61356 5.3067 4.51417 5.42665L1.18084 9.42665C1.06768 9.56279 0.905068 9.64841 0.728784 9.66466C0.5525 9.68091 0.376979 9.62647 0.240835 9.51331C0.10469 9.40015 0.0190741 9.23755 0.00282099 9.06126C-0.0134322 8.88498 0.0410088 8.70946 0.154168 8.57331L3.14083 4.99998L0.260835 1.42664C0.205457 1.35845 0.164103 1.27999 0.139148 1.19576C0.114194 1.11154 0.106131 1.02321 0.115424 0.935857C0.124717 0.848504 0.151181 0.763849 0.193297 0.686758C0.235413 0.609667 0.29235 0.541659 0.360834 0.486645C0.429382 0.425591 0.5098 0.379352 0.597049 0.350823C0.684298 0.322295 0.776498 0.312093 0.867874 0.320855C0.959249 0.329617 1.04783 0.357154 1.12807 0.401743C1.20831 0.446332 1.27847 0.507011 1.33417 0.579979L4.55417 4.57998C4.63785 4.70337 4.67775 4.85124 4.6675 4.99998Z"
          fill="white"
        />
      </svg>
    );
  };

  const SearchSvgs = () => {
    return (
      <svg
        style={{ marginTop: "0.8rem" }}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 12.5C7.83123 12.4997 9.1241 12.0541 10.1728 11.234L13.4697 14.531L14.5303 13.4705L11.2333 10.1735C12.0538 9.12475 12.4997 7.83158 12.5 6.5C12.5 3.19175 9.80825 0.5 6.5 0.5C3.19175 0.5 0.5 3.19175 0.5 6.5C0.5 9.80825 3.19175 12.5 6.5 12.5ZM6.5 2C8.98175 2 11 4.01825 11 6.5C11 8.98175 8.98175 11 6.5 11C4.01825 11 2 8.98175 2 6.5C2 4.01825 4.01825 2 6.5 2Z"
          fill="white"
        />
      </svg>
    );
  };

  const RemoveSvg = () => {
    return (
      <svg width="154" height="18" viewBox="0 0 174 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="135" cy="6" r="6" fill="#800000" />
        <line x1="132" y1="6" x2="138" y2="6" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg>
    )
  }

  return (
    <>
      <div style={{ marginLeft: "49rem" }}>
        <pre>
          <TheHeading>Setup your Profile!</TheHeading>
          <YourProfile>Your Profile Picture</YourProfile>
          <DpPic></DpPic>
          <YourProfile style={{ marginTop: "3rem" }}>Bio</YourProfile>
          <BioInput></BioInput>

          <YourProfile style={{ marginTop: "2rem" }}>Your Interests</YourProfile>

          <Text1>
            You can select a maximum of 5 interest tags and a <br />
            minimum of 1 interest tag.
          </Text1>

          <SearchBar>
            <div style={{
              marginLeft: "0.5rem",
              marginBottom: "-0.7rem",
              width: "15px",
              height: "15px"
            }}>
              <SearchSvgs></SearchSvgs></div>
            <input placeholder="Search" type="text"></input>
          </SearchBar>
          <br />
          <Hobby style={{ marginTop: "1.6rem" }}>
            <HobbyText style={{ marginLeft: "1rem" }}>Photography</HobbyText>
            <div style={{ marginLeft: "-7.9rem" }}>
              <RemoveSvg></RemoveSvg>
            </div>
            <Dot style={{ marginLeft: "-1.8rem" }}></Dot>

            <HobbyText style={{ marginLeft: "0.2rem" }}>Travel</HobbyText>
            <div style={{ marginLeft: "-10.45rem" }}>
              <RemoveSvg></RemoveSvg>
            </div>
            <Dot style={{ marginLeft: "-1.8rem" }}></Dot>

            <HobbyText style={{ marginLeft: "0.2rem" }}>Dogs</HobbyText>
            <div style={{ marginLeft: "-10.8rem" }}>
              <RemoveSvg></RemoveSvg>
            </div>
          </Hobby>
          <div style={{ display: "inline-block", marginBlockStart: "1.5rem" }} >
            <Hobby1 ><HobbyText1>Cats</HobbyText1></Hobby1>
            <Hobby1 style={{ marginLeft: "0.6rem" }}><HobbyText1>Birds</HobbyText1></Hobby1>
            <Hobby1 style={{ marginLeft: "0.6rem" }}><HobbyText1>Cars</HobbyText1></Hobby1>
          </div>
          <div style={{ marginLeft: "20rem", marginTop: "1.3rem" }}>
            <NextButton>
              <ButtonText>Next</ButtonText>
              <NextSvg></NextSvg>
            </NextButton>
            <br />
            <SkipForNow>Skip for now</SkipForNow>
          </div>
        </pre>
      </div>
    </>
  );
};

export default InterestSelection;
