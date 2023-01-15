// TODO

// get user info from api endpoint by sending a get request with header and token
// Hint for token:
// token is in localstorage (token from localstorage.getItem("token")
// have to send authorization headers
//

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Config from "../utils/Config";
import { useState, useEffect } from "react";
const WelcomePage = ({ authenticated, setAuthenticated }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("Welcome Page");
    async function getUsers() {
      try {
        const res = await axios.get(`${Config.BASE_URL}/api/users`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setUsers(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, []);

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    navigate(-1);
  };
  return (
    <div>
      <h1>welcome!</h1>
      {/* <button>See all users</button> */}
      <button onClick={logout}>Log-out</button>
      <div className="users">
        {users.map((user) => (
          <div className="user-details" key={user.id}>
            <h5>{user.name}</h5>
            <h5>{user.email}</h5>
            <img src={user.profilepicture} alt="" />
            <h5>{user.location}</h5>
            <h5>{user.createdat}</h5>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomePage;
