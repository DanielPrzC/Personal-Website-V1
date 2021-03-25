import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
  display: flex;
  margin: 0px auto;
  padding: 100px 0px;
  max-width: 888px;
  @media (max-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (max-width: 480px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  ${({ hero }) =>
    hero &&
    css`
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      min-height: 100vh;
    `}
  ${({ aboutme }) =>
    aboutme &&
    css`
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    `}
  ${({ technical }) =>
    technical &&
    css`
      flex-wrap: wrap;
      justify-content: space-around;
    `}
  ${({ contact }) =>
    contact &&
    css`
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  
  ${({ notfound }) =>
  notfound &&
  css`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  `}
`;

export const Header = styled.h2`
  color: #495464;
  font-family: "Poppins", sans-serif;
  font-size: clamp(26px, 5vw, 32px);
  display: flex;
  align-items: center;
  margin: 0.625rem 0 2.5rem;
  position: relative;
  width: 100%;
  ${({contact}) => contact && css`
    font-size: 4rem;
    justify-content: center;
    text-align: center;
    @media (max-width: 480px) {
      font-size: 3rem;
      line-height: 1;
    }
  `}
`;