import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/techs");
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  };
  return (
    <div id="techlist-modal" className="modal">
      <div className="modal-content">
        <h4>Técnicos</h4>
        <ul className="collection">
          {!loading && techs.length === 0 ? (
            <p className="center">
              Nenhum Técnico cadastrado no nosso Banco de Dados
            </p>
          ) : (
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)
          )}
        </ul>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-light btn">
          Fechar
        </a>
      </div>
    </div>
  );
};

export default TechListModal;
