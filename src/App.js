import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import SmartDashboard from "./components/dashboard/SmartDashboard";
import Auth from "./components/auth/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* //eventually home page */}
        <Route path="/" render={props => <Auth {...props} />} />{" "}
        <Route path="/auth" render={props => <Auth {...props} />} />
        <Route
          path="/dashboard"
          render={props => <SmartDashboard {...props} />}
        />
      </BrowserRouter>
    );
  }
}

export default App;
