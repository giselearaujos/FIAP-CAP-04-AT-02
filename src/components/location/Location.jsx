import { useState } from "react";
import "./location.css";

function Location() {
  const [cep, setCep] = useState("13010-001");
  const [dataCep, setDataCep] = useState({});
  const [cepError, setCepError] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    chamarCep();
  };

  const handleChange = (event) => {
    setCep(event.target.value);
  };

  const chamarCep = () => {
    setCepError(null);

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setDataCep(data);
        setShowResults(true);
      })
      .catch((error) => {
        console.error("Erro na consulta do CEP: ", error);
        setShowResults(false);
        setCepError("Erro na consulta do CEP");
      });
  };

  return (
    <section id="location">
      <h5 className="location-title">Onde estou?</h5>
      <h2 className="location-subtitle">Localização</h2>
      <form onSubmit={handleSubmit} className="location__container">
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={handleChange}
          className="location-input"
        />
        <button type="submit" className="btn btn-primary">Buscar</button>
      </form>
      {showResults && (
        <div className="location-details">
          <p className="location-info">CEP: {dataCep.cep}</p>
          <p className="location-info">Logradouro: {dataCep.logradouro}</p>
          <p className="location-info">Bairro: {dataCep.bairro}</p>
          <p className="location-info">Localidade: {dataCep.localidade}</p>
          <p className="location-info">UF: {dataCep.uf}</p>
        </div>
      )}
      {cepError && <p className="location-error">{cepError}</p>}
    </section>
  );
}

export default Location;
