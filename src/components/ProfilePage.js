import store from "../Redux/store";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";

const ProfilePage = () => {
  const id = useSelector((state) => state.Id);
  const name = useSelector((state) => state.Name);
  const email = useSelector((state) => state.Email);
  return (
    <Container align="center">
      <Typography variant="h5">User Profile</Typography>
      <br />
      <Typography>
        <strong>User Id:</strong> {id}
      </Typography>
      <Typography>
        <strong>Name:</strong> {name}
      </Typography>
      <Typography>
        <strong>Email:</strong> {email}
      </Typography>
    </Container>
  );
};

export default ProfilePage;
