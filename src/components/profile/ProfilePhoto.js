import React from "react";
import Profile from "./profile.jpeg";

const ProfilePhoto = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-3 mt-5">
        <img
          style={{ height: "400px", width: "500px" }}
          src={Profile}
          alt="profile"
        />
      </div>
    </div>
  </div>
);

export default ProfilePhoto;
