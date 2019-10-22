import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { createTech } from "../../actions/techActions";

const AddTechModal = ({ createTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({
        html: "Por favor preencha todos os dados"
      });
    } else {
      const newTech = {
        firstName,
        lastName
      };

      createTech(newTech);
      M.toast({
        html: "Técnico Adicionado"
      });

      //clear Fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="tech-modal" className="modal">
      <div className="modal-content">
        <h4>Cadastrar Novo Técnico</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              Nome:
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Sobrenome:
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light btn"
        >
          Criar
        </a>
      </div>
    </div>
  );
};

export default connect(
  null,
  { createTech }
)(AddTechModal);
