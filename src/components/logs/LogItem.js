import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logActions";
const LogItem = ({ log, deleteLog, setCurrent }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          onClick={() => setCurrent(log)}
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span>Ultima alteração feita
          por <span className="black-text">{log.tech}</span> em{" "}
          <Moment format="MMMM Do YYYY,h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i
            onClick={() => deleteLog(log.id)}
            className="material-icons grey-text"
          >
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

export default connect(
  null,
  { deleteLog, setCurrent }
)(LogItem);
