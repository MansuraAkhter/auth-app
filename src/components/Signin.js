import { useEffect, useState } from "react";
import axios from "axios";
import config from "../utils/Config";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { signedIn } from "../Redux/actions";
import store from "../Redux/store";
import { useSelector } from "react-redux";
import {
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
        store.dispatch(
          signedIn(res.data.data.Id, res.data.data.Name, res.data.data.Email)
        );
        console.log(store.getState());
        navigate("/welcome");
      } else {
        setErrorMessage(res.data.message);
        setError(true);
      }
    } catch (err) {
      console.log(err);
      setErrorMessage(err.message);
      setError(true);
    }
  }
  if (authenticated) return <Navigate to="/welcome" />;
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "700px",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1" align="center" color="#20303C">
        Log In
      </Typography>
      <form noValidate autoComplete="off">
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl variant="outlined">
            <InputLabel htmlFor="display-email">Enter email </InputLabel>
            <OutlinedInput
              id="diaplay-email"
              label="Enter email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
              sx={{ margin: "10px 0px", width: "320px" }}
              error={error}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="display-name">Password </InputLabel>
            <OutlinedInput
              id="display-name"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              sx={{ margin: "10px 0px", width: "320px" }}
              error={error}
            />
          </FormControl>

          {errorMessage !== "" ? (
            <Typography color="#485056">{errorMessage}</Typography>
          ) : (
            <br />
          )}
          <Button
            variant="outlined"
            type="submit"
            onClick={login}
            sx={{ width: "150px", borderRadius: "20px", margin: "10px 0px" }}
          >
            Log In
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default Signin;
