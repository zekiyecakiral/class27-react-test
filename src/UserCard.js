import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';

function UserCard({ user }) {
  console.log("single user", { user });
  return (
    <>
      {user && (
        <Card>
          <CardContent>
          <Avatar alt="Remy Sharp" src={user.picture.medium} />
            <Typography variant="h5" component="h2">
              {user.name.first} {user.name.last}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {user.email}
            </Typography>

            <Typography variant="body2" component="p">
              {user.cell}
              <br />
              {user.location.city}, {user.location.country}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
}

export default UserCard;
