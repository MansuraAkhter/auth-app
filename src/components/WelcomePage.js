import axios from "axios";
import { useNavigate } from "react-router-dom";
import Config from "../utils/Config";
import { useState, useEffect } from "react";
import store from "../Redux/store";
import { signedOut } from "../Redux/actions";
import { Link } from "react-router-dom";

const WelcomePage = () => {
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
    console.log("loggedOut");
    store.dispatch(signedOut(false));
    localStorage.removeItem("token");
    navigate(-1);
  };
  return (
    <div>
      <h1>welcome!</h1>

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
        <Link to="/">Go to sign in</Link>
      </div>
    </div>
  );
};

export default WelcomePage;
