import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import "./signin.css";
import config from "../../utils/Config";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { signedIn } from "../../Redux/actions";
import store from "../../Redux/store";
import { useSelector } from "react-redux";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  let authenticated = useSelector((state) => state.authenticated);

  async function login(event) {
    event.preventDefault();
    try {
      const res = await axios.post(`${config.BASE_URL}/api/authaccount/login`, {
        email: email,
        password: password,
      });

      if (res.data.message == "success") {
        localStorage.setItem("token", res.data.data.Token);
        console.log(res.data.data.Id);
        store.dispatch(signedIn(res.data.data.Id));
        console.log(store.getState());
        navigate("/welcome");
      } else {
        setErrorMessage(res.data.message);
      }
    } catch (err) {
      console.log(err);
      setErrorMessage(err.message);
    }
  }
  if (authenticated) return <Navigate to="/welcome" />;
  return (
    <div className="form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          {errorMessage !== "" ? (
            <Form.Text className="text-muted">{errorMessage}</Form.Text>
          ) : (
            <br />
          )}
        </Form.Group>
        <Button
          className="submit"
          variant="primary"
          type="submit"
          onClick={login}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signin;
