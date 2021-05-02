import React from "react";
import {
  IntroPageBackground,
  IntroPageContainer,
  VideoBg,
  IntroPageContent,
  IntroH1,
  IntroH2,
  ArrowIcon,
  Icon,
} from "./IntroPageElements";
import video from "./video.mp4";

function IntroPage() {
  return (
    <IntroPageContainer>
      <IntroPageBackground>
        <VideoBg autoPlay muted loop src={video} type="video/mp4" />
      </IntroPageBackground>
      <IntroPageContent>
        <IntroH1>Serena Graham</IntroH1>
        <IntroH2>Front-End Developer</IntroH2>
        <Icon>
          <ArrowIcon />
        </Icon>
      </IntroPageContent>
    </IntroPageContainer>
  );
}

export default IntroPage;
