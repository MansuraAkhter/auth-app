import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const UserCard = ({ user }) => {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader title={user.name} subheader={user.createdat} />
        <CardMedia
          component="img"
          height="150"
          image={user.profilepicture}
          alt="Profile picture"
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography color="textSecondary" variant="body2">
            {user.email}
            <br />
            {user.location}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserCard;
