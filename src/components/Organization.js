import React, { useState, useEffect } from "react";

export default function Organization(props) {
  const URL = props.organizations_url;
  const [login, setLogin] = useState("");
  const [avatar, setAvatar] = useState("");
  const [organization_url, setOrganization_url] = useState("");

  //on page load, or URL change, fetch orgzanzation info and setstates

  useEffect(() => {
    async function fetchData() {
      await fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            setLogin(data[0].login);
            setAvatar(data[0].avatar_url);
            setOrganization_url(`https://github.com/${login}`);
          } else {
            setLogin("");
            setAvatar("");
          }
        })
        .catch((error) => {
          console.log("no user found");
        });
    }
    fetchData();
  }, [URL]);

  //two different returns based on if user is found or not.
  if (login) {
    return (
      <>
        <p>Organization:</p>
        <img className="organization-avatar-img" src={avatar} alt="avatar" />
        <p>
          <a href={organization_url} target="_blank" rel="noopener noreferrer">
            {login}
          </a>
        </p>
      </>
    );
  } else {
    return <li>No Organization found</li>;
  }
}
