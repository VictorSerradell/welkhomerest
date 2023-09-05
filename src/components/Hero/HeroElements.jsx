import React from "react";
import styled from "styled-components";
import ImgBg from "../../images/pexels-nesrin-danan.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 180vh;
  background-position: center ;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh-20);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 3rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2rem, 10vw, 5rem);
  margin-bottom: 4rem;
  margin-top: 50rem;
  margin-left: 6rem;
  text-shadow: 2px 2px 4px rgba(255, 215, 0, 20);
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  opacity: 0.8;
  text-shadow: 2px 2px 4px rgba(255, 215, 0, 20);
  margin-bottom: 2rem;
  margin-left: 6rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  margin-left: 15rem;
  border: none;
  border-radius: 25px;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
