import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";

function Footer() {
  return (
    <>
      <a
        className="icon-link"
        href="https://www.linkedin.com/in/treavorwills/"
        target="_blank"
      >
        <FaLinkedin
        //   size=""
        //   color="black"
          title="Linkedin icon link to Treavor's Linkedin profile"
        />
      </a>
      <a className="icon-link" href="https://github.com/treavorwills" target="_blank">
        <FaGithub
        //   size=""
        //   color="black"
          title="Github icon link to Treavor's Github profile"
        />
      </a>
    </>
  );
}

export default Footer;
