import React from "react";
import styled from "@emotion/styled";
import logo from "../assets/logo.svg";
import WhiteDivider from "./divider";
const StyledSection = styled.section`
  background-image: linear-gradient(
    to right top,
    #7d68ac,
    #8a5fb2,
    #9a53b4,
    #ac41b2,
    #c024ac
  );
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 3.5rem;
  @media screen and (min-width: 600px) {
    font-size: 5rem;
  }
`;

const SubTitle = styled.h3`
  color: white;
  margin-top: 10px;
  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }
`;

const Logo = styled.img`
  width: 15rem;
`;

export default function BrandPresentation() {
  return (
    <>
      <StyledSection>
        <div style={{ marginBottom: "30px" }}>
          <Title>
            Avero <br />
            Insurance
          </Title>
          <SubTitle>If it can be damaged, we can cover it!</SubTitle>
        </div>
        <div style={{ margin: "10px" }}>
          <Logo src={logo} />
        </div>
      </StyledSection>
      <WhiteDivider />
    </>
  );
}
