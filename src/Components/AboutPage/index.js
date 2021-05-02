import React from "react";
import {
  AboutPageWrapper,
  AboutPageContainer,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrap,
  Img,
  Heading,
  Subtitle,
} from "./AboutPageElements";
import logo from "../../logo192.png";

function AboutPage() {
  return (
    <AboutPageContainer>
      <AboutPageWrapper>
        <AboutRow>
          <Column1>
            <TextWrapper>
              <Heading>About me</Heading>
              <Subtitle>Something about me</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={logo} />
            </ImgWrap>
          </Column2>
        </AboutRow>
      </AboutPageWrapper>
    </AboutPageContainer>
  );
}

export default AboutPage;
