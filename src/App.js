import React from "react";
import FullName from "./components/profile/FullName";
import Address from "./components/profile/Address";
import Profile from "./components/profile/ProfilePhoto";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <FullName />
            <Address />
            <Profile />
          </div>
        </div>
      </div>
    );
  }
}
