import { Component } from "react";
import ME from "../../assets/vic3.jpeg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.css";
class About extends Component {
  render() {
    return (
      <section id="about">
        <h5>Saiba mais</h5>
        <h2>Sobre mim</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsAwardFill className="about__icon" />
                <h5>Experiência</h5>
                <small>2+ Anos Trabalhando</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clientes</h5>
                <small>10+ WorldWide</small>
              </article>
              <article className="about__card">
                <FaProjectDiagram className="about__icon" />
                <h5>Projetos</h5>
                <small>20+ Projetos Finalizados</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptatum recusandae sint ipsam est inventore alias
              dolorem ducimus voluptatem ipsa quidem expedita dolorum porro
              error ex amet officia, facilis assumenda!
            </p>
            <a href="#contact" className="btn btn-primary">
              Fale comigo aqui!
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
