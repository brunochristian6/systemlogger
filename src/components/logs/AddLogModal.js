import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { createLog } from "../../actions/logActions";
import TechSelectOptions from "../techs/TechSelectOptions";

const AddLogModal = ({ createLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({
        html: "Por favor preencha todos os dados"
      });
    } else {
      const newLog = {
        message,
        tech,
        attention,
        date: new Date()
      };

      createLog(newLog);
      //clear Fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Criação de novo Ticket</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Descrição
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="">Escolha um técnico </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Necessita Urgência</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light btn"
        >
          Enviar
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  heigth: "75%"
};
export default connect(
  null,
  { createLog }
)(AddLogModal);
