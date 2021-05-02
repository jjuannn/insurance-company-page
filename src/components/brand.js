import React from "react";
import styled from "@emotion/styled";
import logo from "../assets/logo.svg";
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

const Divider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
`;

const Svg = styled.svg`
  position: relative;
  display: block;
  width: calc(138% + 1.3px);
  height: 22px;
  transform: rotateY(180deg);
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
      <div style={{ position: "relative" }}>
        <Divider>
          <Svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              style={{ fill: "#FFFFFF" }}
            ></path>
          </Svg>
        </Divider>
      </div>
    </>
  );
}
