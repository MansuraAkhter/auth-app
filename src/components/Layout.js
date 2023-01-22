import { useSelector } from "react-redux";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import { Button, Container, ThemeProvider, Typography } from "@mui/material";
import { AppBar, Toolbar, createTheme } from "@mui/material";
import { signedOut } from "../Redux/actions";
import { useNavigate } from "react-router-dom";
import store from "../Redux/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#20303C",
    },
    Typography: {
      fontFamily: "Josefin Sans",
      fontWeightLight: 1000,
    },
  },
});
const Layout = () => {
  const navigate = useNavigate();
  let authenticated = useSelector((state) => state.authenticated);
  let name = useSelector((state) => state.Name);
  console.log(name);

  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  const logout = () => {
    console.log("loggedOut");
    store.dispatch(signedOut(false));
    localStorage.removeItem("token");
    navigate(-1);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h3" color="#20303C">
            Logo
          </Typography>
          <Container style={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography sx={{ padding: "20px" }}>{name}</Typography>
            <Button
              onClick={logout}
              variant="contained"
              color="primary"
              sx={{ width: "150px", borderRadius: "20px", margin: "10px 0px" }}
            >
              Log-out
            </Button>
          </Container>
        </Container>
      </ThemeProvider>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        style={{
          borderTop: "2px  solid black",
          borderBottom: "2px  solid black",
          margin: " 20px 20px",
        }}
      >
        <Toolbar>
          <NavLink className="linkText" to="/profile">
            <Button color="inherit">Profile</Button>
          </NavLink>
          <NavLink className="linkText" to="/welcome">
            <Button color="inherit">Home</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
