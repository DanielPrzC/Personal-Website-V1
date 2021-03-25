import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background: none;
  border: 2px solid;
  border-radius: 5px;
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  ${({ navbar }) =>
    navbar &&
    css`
      color: #495464;
      padding: 0.5rem 1rem;
      &:hover {
        transition: all 0.2s ease-in-out;
        background-color: rgba(73, 84, 100, 0.4);
      }
    `}
   ${({cta}) => cta && css`
      color: #495464;
      padding: 1rem 2rem;
      &:hover {
        transition: all 0.2s ease-in-out;
        background-color: rgba(73, 84, 100, 0.4);
      }
   `}
   ${({sidebar}) => sidebar && css`
        color: #F4F4F2;
        padding: 0.5rem 1rem;
        &:hover {
        transition: all 0.2s ease-in-out;
        background-color: rgba(244,244,242, 0.4);
      }
   `}
`;

const CTAButton = ({ children, navbar, cta, sidebar }) => {
  return <Button navbar={navbar} cta={cta} sidebar={sidebar}>{children}</Button>;
};

export default CTAButton;