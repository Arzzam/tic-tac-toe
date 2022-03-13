import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";

const StyledGitHub = styled(GitHubIcon)`
  color: rgb(150, 27, 150) !important;

  & :hover {
    color: rgb(194, 98, 194) !important;
  }
`;

const StyledLinkedIn = styled(LinkedInIcon)`
  color: rgb(150, 27, 150) !important;

  & :hover {
    color: rgb(194, 98, 194) !important;
  }
`;

const StyledInsta = styled(InstagramIcon)`
  color: rgb(150, 27, 150) !important;

  & :hover {
    color: rgb(194, 98, 194) !important;
  }
`;

function ContactIcons() {
  return (
    <div>
      <Link href="https://github.com/Arzzam" target="_blank">
        <StyledGitHub className="icons" />
      </Link>
      <Link href="https://www.linkedin.com/in/arzzam19/" target="_blank">
        <StyledLinkedIn className="icons" />
      </Link>
      <Link href="https://www.instagram.com/arzzam_19/" target="_blank">
        <StyledInsta className="icons" />
      </Link>
    </div>
  );
}

export default ContactIcons;
