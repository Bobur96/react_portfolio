import Reveal from "react-reveal/Reveal";
import "../style.css";
import "../index.css";

function Footer({ theme }) {
  return (
    <div class="footer" style={theme}>
      <Reveal effect="animText" duration="1000">
        <p style={theme}>
          &copy; copyright 2021. version <span>4.1</span>
        </p>
      </Reveal>
    </div>
  );
}

export default Footer;
