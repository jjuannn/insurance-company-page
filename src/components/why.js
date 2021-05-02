import React from "react";
import styled from "@emotion/styled";

const StyledSection = styled.section`
  min-height: 100vh;
  background-image: linear-gradient(
    to right top,
    #7d68ac,
    #8a5fb2,
    #9a53b4,
    #ac41b2,
    #c024ac
  );
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;
  @media screen and (min-width: 600px) {
    font-size: 3.5rem;
  }
`;

const Divider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`;

const Svg = styled.svg`
  position: relative;
  display: block;
  width: calc(147% + 1.3px);
  height: 35px;
  transform: rotateY(180deg);
`;

const Paragraph = styled.p`
  color: white;
  padding: 5%;

  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

export default function WhyUs() {
  return (
    <>
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
      <StyledSection>
        <Title>Why Avero Insurance? </Title>
        <Paragraph>
          When the company was created, it only had one objective: facilitate
          the lives of the people. That's why we choose our bussiness model,
          that consist in the lowest prices! In this way, we allow more people
          to enjoy our services. We can give you the best prices starting at
          $100 per month! All you have to do is enjoy the benefits of the Avero
          Insurance card, like 50% off in Starbucks and Nike, instant medical
          attention, or even free meals at McDonalds!
        </Paragraph>
      </StyledSection>
    </>
  );
}
