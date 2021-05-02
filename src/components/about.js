import React from "react";
import styled from "@emotion/styled";
import icon from "../assets/trend.svg";

const StyledSection = styled.section`
  flex-grow: 1;
  min-height: 100vh;
  padding: 20px 5px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  background: -webkit-linear-gradient(#7d68ac, #c024ac);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  text-align: center;
  @media screen and (min-width: 600px) {
    font-size: 3.5rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  background: -webkit-linear-gradient(#7d68ac, #c024ac);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 10px;
  margin-top: 10px;
  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #c024ac;
  @media screen and (min-width: 600px) {
    font-size: 2rem;
  }
`;

const AboutCard = styled.div`
  margin: 10px;
  padding: 10px;
  @media screen and (min-width: 600px) {
    max-width: 500px;
  }
`;

const CardsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
const ImgIcon = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
export default function About() {
  return (
    <StyledSection>
      <Title>About Us</Title>
      <SubTitle>
        Founded in 1990 by Juan Avero,
        <br /> the company never stopped growing until we became # 1 in
        Argentina
      </SubTitle>
      <CardsContainer>
        <div>
          <AboutCard>
            <CardTitle>More than 50.000 clients!</CardTitle>
            <p>
              Everyone knows our quality, that's why they choose us. We have the
              best contacts that exist to provide our clients with the best
              quality and service possible.
            </p>
          </AboutCard>
          <AboutCard>
            <CardTitle>We make history!</CardTitle>
            <p>
              Avero Insurance reached a +30.000m U$D market value, transforming
              ourselves into the biggest argentine company ever created.
            </p>
          </AboutCard>
        </div>
        <div style={{ textAlign: "center", margin: "50px" }}>
          <ImgIcon src={icon} />
        </div>
      </CardsContainer>
    </StyledSection>
  );
}
