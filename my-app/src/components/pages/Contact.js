import HeaderPhoto from "../HeaderPhoto";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import LilAnimation from "../LilAnimation";

export default function Contact() {
  return (
    <>
      <HeaderPhoto page="Contact"></HeaderPhoto>
      <section className="contact">
        <p>
          Hey! If anything on here caught your eye and you feel like reaching
          out, please do.
        </p>
        <section className="tags">
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/treavorwills/"
            target="_blank"
          >
            {" "}
            <FaLinkedin
              size="10rem"
              title="Linkedin icon link to Treavor's Linkedin profile"
            />
          </a>
          <a
            className="icon-link"
            href="mailto:treavor.wills@gmail.com"
            target="_blank"
          >
            {" "}
            <BsFillEnvelopeFill
              size="10rem"
              title="Envelope icon to send Treavor and email"
            />
          </a>
        </section>
        <LilAnimation></LilAnimation>
      </section>
    </>
  );
}
