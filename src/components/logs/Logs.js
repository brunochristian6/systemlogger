import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Loader from "../Loader";
import { getLogs } from "../../actions/logActions";

const Logs = ({ logs, getLogs, loading }) => {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs.length === null) {
    return <Loader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Tickets</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">Nenhum Ticket Adicionado !</p>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    logs: state.log.logs,
    loading: state.log.loading
  };
};

export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
