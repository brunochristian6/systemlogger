import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTech } from "../../actions/techActions";

const TechSelectOptions = ({ getTech, tech: { techs, loading } }) => {
  useEffect(() => {
    getTech();
  }, []);
  if (loading || techs === null || techs.length === 0) {
    return <option disabled>Nenhum Técnico Cadastrado</option>;
  }
  return techs.map(t => (
    <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
      {t.firstName} {t.lastName}
    </option>
  ));
};

const mapStateToProps = state => {
  return {
    tech: state.tech
  };
};

export default connect(
  mapStateToProps,
  { getTech }
)(TechSelectOptions);
