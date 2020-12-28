import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Header from "./layout/Header";
import DashBoard from "./Leads/DashBoard";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts  from "./layout/Alerts";


const alertOptions = {
  position: 'top center',
  timeout: 3000
}

const App = () => {
  return (  
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Header />
        <Alerts />
        <div className="container">
          <DashBoard />
        </div>
      </AlertProvider>
    </Provider>
  );
};

const appDiv = document.getElementById("app");

render(<App />, appDiv);
