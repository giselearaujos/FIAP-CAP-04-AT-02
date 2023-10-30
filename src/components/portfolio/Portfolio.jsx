import { Component } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/vida-renal.png";
import IMG2 from "../../assets/reci.png";
import IMG3 from "../../assets/vai-com-gulliver.png";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "Prontuário eletrônico",
    github: "https://github.com/viitoriaferreiraa/frontend_vida_renal",
    demo: "https://giselearaujos.github.io/frontend_vida_renal/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Plataforma de reciclagem",
    github: "https://github.com/viitoriaferreiraa/FIAP-CAP-12-FASE-2",
    demo: "https://fiap-cap-12-fase-2.vercel.app/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Plataforma com dicas de viagem.",
    github: "https://github.com/giselearaujos/VaiComGulliver",
    demo: "https://vaicomgulliver.netlify.app/"
  },
];

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h5>Meus recentes trabalhos</h5>
        <h2>Portifólio</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
