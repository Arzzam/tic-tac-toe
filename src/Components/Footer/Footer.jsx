import React from "react";
import ContactIcons from "./ContactIcons";
import styled from "styled-components";

const cr = "Copyright ⓒ ";
const year = new Date().getFullYear();
const name = "Made By Nafil Arzzam";

const StyledFooter = styled.footer`
  padding-top: 1rem;
  line-height: 1rem;
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  display: contents;

  & p {
    color: rgb(150, 27, 150);
    margin: 16px 0;
  }
`;

const FooterDiv = styled.div`
  padding-top: 10rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterDiv>
        <ContactIcons />
        <p> {name}. </p>
        <p>
          {cr}
          {year}.
        </p>
      </FooterDiv>
    </StyledFooter>
  );
}

export default Footer;
