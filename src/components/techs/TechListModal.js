import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import { getTech } from "../../actions/techActions";

const TechListModal = ({ techs, getTech, loading }) => {
  useEffect(() => {
    getTech();
  }, []);

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

const mapStateToProps = state => {
  return {
    techs: state.tech.techs,
    loading: state.tech.loading
  };
};

export default connect(
  mapStateToProps,
  { getTech }
)(TechListModal);
