import React from "react";
import styled from "styled-components";

const CharactersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 0 auto;
    font-size: 25px;
    padding: 0.5rem;
    border: 2px black solid;
    margin-top: 2%;
  }
`;

export default function Character(props) {
  return (
    <CharactersDiv>
      {props.data.map((obj, idx) => {
        return (
          <div key={idx}>
            <h2>{obj.name}</h2>
            <h2>{obj.birth_year}</h2>
          </div>
        );
      })}
    </CharactersDiv>
  );
}
