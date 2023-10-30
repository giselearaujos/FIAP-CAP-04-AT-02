import { Component } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Expreience";
import Portfolio from "./components/portfolio/Portfolio";
import Location from "./components/location/Location";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Location />
        <Contact />
        <Footer />
      </>
    );
  }
}
export default App;
