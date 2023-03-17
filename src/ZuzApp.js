import React from "react";
import { connect } from "react-redux";
import Splash from "./pages/Splash";
import "./css/App.css";

function ZuzApp(props) {
  const { loaded } = props;
  return loaded ? <h2>Wellcome to App</h2> : <Splash />;
}

const mapStateToProps = (state) => {
  return {
    loaded: state.App.loaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setState: (loaded) => dispatch({ type: "APP_STATE", state: { loaded } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ZuzApp);
