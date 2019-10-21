import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "" || attention === "") {
      M.toast({
        html: "Por favor preencha todos os dados"
      });
    } else {
      console.log("dsada");

      //clear Fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Editar</h4>
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
              name="tech"
              id="tech"
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Escolha o técnico responsável
              </option>
              <option value="John dow">John Doe</option>
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
          Editar
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  heigth: "75%"
};
export default EditLogModal;
