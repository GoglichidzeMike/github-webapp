import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import User from "./User";

//URL to get most popular users from github api
const MOST_POPULAR =
  "https://api.github.com/search/users?q=followers%3A%3E%3D1000&ref=searchresults&s=followers&type=Users";

function PopularUsers(props) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState({ flexDirection: "column" });

  //on page load, get most popular users, and push them to the list array using User component.
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      await fetch(MOST_POPULAR, {
        headers: {
          Authorization: process.env.PERSONAL_ACCESS_TOKEN,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const items = data.items.map((item) => {
            return (
              <User
                avatarUrl={item.avatar_url}
                userName={item.login}
                type={item.type}
                key={item.node_id}
              />
            );
          });
          setList(items);
          setLoading(false);
        })
        .catch((error) => {
          console.log(
            "something went wrong, no time to figure shit out, deadline is on 5th of January dog."
          );
        });
    }
    fetchData();
  }, []);

  const setListView = (e) => {
    setStyle({ flexDirection: "column" });
  };
  const setGridView = (e) => {
    setStyle({ flexDirection: "row" });
  };

  return (
    <>
      <div className="popular-container">
        <p className="popular-header">Most Followed People Of GitHub</p>
        <div className="buttons">
          <button onClick={setListView}>List View</button>
          <button onClick={setGridView}>Grid View</button>
        </div>
      </div>
      <div>
        <div className="popular-users-container" style={style}>
          {loading && <Loading />}
          {list}
        </div>
      </div>
    </>
  );
}

export default PopularUsers;
