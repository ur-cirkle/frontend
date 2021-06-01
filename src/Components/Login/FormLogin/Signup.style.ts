import React from "react";

import styled from "styled-components";
const Sbox = styled.div`
  background-color: black;
  color: white;
  max-width: 370px;
  margin: 10;
  padding: 30px 0px;
  text-align: center;
  position: relative;
  h2 {
    font-size: 1.9em;
    margin-bottom: 40px;
    font-family: Montserrat;
    font-weight: lighter;
  }
  input {
    font-size: 0.7em;
    color: white;
    background-color: transparent;
    marign: 30px;
    padding: 10px;
    margin: 5px;
    border-radius: 30px;
    width: 300px;
    outline: none;
    border: 1px solid grey;
  }
  button {
    border: none;
    outline: none;
    border-radius: 30px;
    background-color: #6f1bcf;
    padding: 10px 0px;
    width: 250px;
    font-size: 0.8em;
    color: white;
    margin: 30px;
  }
  a {
    position: absolute;
    font-size: 0.7em;
    color: #6f1bcf;
    right: 30px;
  }
  h3 {
    margin-top: 140px;
    font-family: Montserrat;
    font-weight: lighter;
    font-size: 1.3em;
  }
  span {
    color: #00ffff;
  }
  .fas {
    opacity: 0.7;
    position: absolute;
    right: 40px;
    top: 228px;
  }
  .fa-eye-slash {
    display: none;
  }
  input[type="checkbox"] {
    position: absolute;
  }
`;

export default Sbox;
