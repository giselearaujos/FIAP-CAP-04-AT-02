import { Component, createRef } from "react";
import "./contact.css";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
class Contact extends Component {
  constructor() {
    super();
    this.form = createRef();
  }
  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this.form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  render() {
    return (
      <section id="contact">
        <h5>Como me encontrar</h5>
        <h2>Contato</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <div className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>Vitoria Ferreira</h5>
              <a href="https://m.me">Send a message</a>
            </div>
            <div className="contact__option">
              <RiWhatsappLine className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+55 11111111111</h5>
              <a href="https://api.whatsapp.com/send?phone=5511111111111">
                Send a message
              </a>
            </div>
          </div>
          <form ref={this.form} onSubmit={this.sendEmail} action="">
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Sua mensagem"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
