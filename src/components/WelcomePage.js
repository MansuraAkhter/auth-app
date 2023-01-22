import axios from "axios";

import Config from "../utils/Config";
import { useState, useEffect } from "react";

import UserCard from "./UserCard";
import { Typography, Button, Container, TextField, Grid } from "@mui/material";

const WelcomePage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
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

  return (
    <Container>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item key={user.id} xs={12} md={6} lg={4}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WelcomePage;
