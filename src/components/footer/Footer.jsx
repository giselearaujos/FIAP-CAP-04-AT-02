import { Component } from "react";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube
} from "react-icons/io";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="#" className="footer__logo">
          Vitória Ferreira
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#experience">Experiências</a>
          </li>
          <li>
            <a href="#portfolio">Portfólio</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.facebook.com" target="_blank">
            <IoLogoFacebook />
          </a>
          <a href="https://instagram.com" target="_blank">
            <IoLogoInstagram />
          </a>
          <a href="https://twitter.com" target="_blank">
            <IoLogoTwitter />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <IoLogoYoutube />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; 2023 FIAP | Vitoria Ferreira | Gisele Araujo</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
