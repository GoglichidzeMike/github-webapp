import React, { useState, useEffect } from "react";

function RepoList(props) {
  const repoUserName = props.repoUserName;
  const [repoList, setRepoList] = useState([]);

  //on page load get repo names
  //only get first 3 results and push to repolist.
  useEffect(() => {
    async function fetchData() {
      await fetch(`https://api.github.com/users/${repoUserName}/repos`, {
        headers: {
          Authorization: process.env.REACT_APP_PERSONAL_ACCESS_TOKEN,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          let size = 3;
          let items = data.slice(0, size);
          let newList = items.map((i) => {
            return i.name;
          });
          setRepoList(newList);
        })
        .catch((error) => {
          console.log("no user found");
        });
    }
    fetchData();
  }, [repoUserName]);

  if (repoList.length === 0) {
    return <h5>No Repos found :(</h5>;
  } else {
    return (
      <div className="repolist">
        <h5>Last 3 Repos:</h5>
        <div>
          <p>{repoList[0]}</p>
          <p>{repoList[1]}</p>
          <p>{repoList[2]}</p>
        </div>
      </div>
    );
  }
}

export default RepoList;
