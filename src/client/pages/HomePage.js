import React from "react";
import styled from "styled-components";

const Title = styled.p`
  color: red;
`;
const Home = () => {
  return (
    <div className="center-align" style={{ marginTop: "200px" }}>
      <h3>Welcome</h3>
      <Title>Check out these awesome features</Title>
    </div>
  );
};

export default {
  component: Home
};
