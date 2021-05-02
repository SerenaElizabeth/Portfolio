import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";

export const IntroPageContainer = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const IntroPageBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  transition: opacity 0.8s linear;
`;
export const IntroPageContent = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  position: absolute;
  padding: 5px 25px;
  /* background: rgba(0, 0, 0, 0.5); */
  /* border: 0.1px solid white; */
`;
export const IntroH1 = styled.h1`
  letter-spacing: 0.08em;
  margin: 8px;
  color: white;
  z-index: 999;
  font-size: 68px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const IntroH2 = styled.h2`
  margin: 8px;
  color: white;
  font-size: 32px;
  z-index: 999;
  text-align: center;
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
  height: 30px;
`;

export const ArrowIcon = styled(FaArrowDown)`
  color: #fff;
  font-size: 2rem;
  &:hover {
    color: #9966cc;
    transition: 0.2s ease-in-out;
    font-size: 3rem;
  }
`;
