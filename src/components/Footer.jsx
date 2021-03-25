import React from "react";
import styled from "styled-components";

import { SocialNetworks } from "../DataBase";

import Icon from "./icons/Icon";

// -------------------- Styling Parameters -------------------- //

const FooterContainer = styled.footer`
  background-color: #495464;
  color: #bbbfca;
  font-family: "Roboto-Mono", monospace;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterWrapper = styled.div`
  min-width: 296px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  a {
    color: #bbbfca;
    &:hover {
      color: #f4f4f2;
      transition: all 0.2s ease-in-out;
    }
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

// -------------------- Final Component -------------------- //

const Footer = () => {
  const Copyright = styled.p`
    margin-top: 2rem;
    font-size: 0.75rem;
  `;

  const year = new Date().getFullYear();

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <SocialLinks>
            {SocialNetworks.map((social, index) => {
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon name={social.network} />
                </a>
              );
            })}
          </SocialLinks>
          <Copyright>Daniel Pérez Castejón &copy;. {year}</Copyright>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;