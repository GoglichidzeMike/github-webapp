import React from "react";
import RepoList from "./RepoList";
import { Link } from "react-router-dom";

function User(props) {
  return (
    <ul className="single-popular-user" style={props.userStyle}>
      <img className="avatar" src={props.avatarUrl} alt="user_avatar" />
      <div className="details">
        <h4>
          User Name: <Link to={`/${props.userName}`}> {props.userName}</Link>
        </h4>
        <h5>User Type: {props.type}</h5>
      </div>
      <RepoList repoUserName={props.userName} />
    </ul>
  );
}

export default User;
