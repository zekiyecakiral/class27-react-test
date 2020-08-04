import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function AllUserDatas({ userList }) {
  const [user, setUser] = useState("");
  
  useEffect(() => {
    setUser(userList[0]);
  }, []);

  const selectedUser = (userIndex) => {
    setUser(userList[userIndex.index]);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {userList.map((item, index) => (
            <p onClick={() => selectedUser({ index })} key={index}>
              {" "}
              {item.name.first} {item.name.last}
            </p>
          ))}
          <UserCard user={user} />
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AllUserDatas;
