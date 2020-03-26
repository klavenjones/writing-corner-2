import React, { useEffect } from "react";
import "./App.css";
import { Navbar, Routes, Footer } from "./_components";
import { authActions } from "./_actions";
import { stores } from "./_helpers";
import { connect } from "react-redux";

function App() {
  useEffect(() => {
    stores.dispatch(authActions.loadProfile());
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    checkAuth: () => {
      dispatch(authActions.checkAuth());
    }
  };
};

const AppContainer = connect(null, mapDispatchToProps)(App);

export { AppContainer as App };
