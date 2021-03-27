import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RepoList from "./RepoList";
import Organization from "./Organization";
import Loading from "./Loading";

export default function UserInfo(params) {
  let { username } = useParams();
  const [loading, setLoading] = useState(false);
  const [avatar_url, setAvatar_url] = useState("");
  const [html_url, setHtml_url] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [organizations_url, setOrganizations_url] = useState("");
  const [login, setLogin] = useState("");

  //on page load, get the username fetch and assign values to states.
  useEffect(() => {
    setLoading(true);
    async function getProfile() {
      await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: process.env.PERSONAL_ACCESS_TOKEN,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data " + data.login);
          setLogin(data.login);
          setAvatar_url(data.avatar_url);
          setFollowers(data.followers);
          setFollowing(data.following);
          setName(data.name);
          setLocation(data.location);
          setType(data.type);
          setLoading(false);
          setHtml_url(data.html_url);
          setOrganizations_url(data.organizations_url);
        })
        .catch((error) => {
          console.log("no user found");
        });
    }
    getProfile();
  }, [username]);

  // display user info if Login is defined, if not "not found" text.

  if (login) {
    return (
      <div className="userInfo">
        {loading && <Loading />}

        <div className="details-container">
          <div className="first">
            <img className="avatar-img" src={avatar_url} alt="avatar" />
            <p className="userName">
              <a href={html_url} target="_blank" rel="noopener noreferrer">
                {username}
              </a>
            </p>
          </div>
          <div className="details-children second">
            <div className="details">
              <p>
                Name: <b>{name ? name : username}</b>
              </p>
              <p>
                Location: <b>{location}</b>
              </p>
              <p>
                Followers: <b>{followers}</b>
              </p>
              <p>
                Following: <b>{following}</b>
              </p>
              <p>
                User Type: <b>{type}</b>
              </p>
            </div>
          </div>
          <div className="details-children fourth">
            <RepoList className="userRepoList" repoUserName={username} />
          </div>
          <div className="details-children third">
            <Organization organizations_url={organizations_url} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {loading && <Loading />}
        <div className="no-user">
          <p>Unfortunately we couldn't find any user by that name.</p>
          <p>
            Try searching for someone else, or check out top 30 most followed
            users of github on our home page.
          </p>
        </div>
      </div>
    );
  }
}
