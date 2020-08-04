import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import FetchedUserData from './FetchedUserData'
import UserCard from './UserCard'
import Button from '@material-ui/core/Button';

const END_POINT = "https://randomuser.me/api/?results=5";

function NewUser() {
  const [loading, setLoading] = useState(false);
  const [loaded,setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [userList, setUserList] = useState([]);

  const fetchUser = async () => {
    setLoading(true);
    setLoaded(false);
    const response = await fetch(END_POINT);
    response
      .json()
      .then((res) => {
        setUserList(res.results);
        setLoading(false);
        setLoaded(true);
      })
      .catch((error) => {
        setHasError(true);
        setLoading(false);
      });
  };

  function getUserList() {
    fetchUser();
  }

  return (
    <div className='container'>
      {loading && <CircularProgress color="secondary" />}
      <Button variant="contained" color="secondary" onClick={getUserList}>Get New User</Button>
      {loaded && <FetchedUserData userList ={userList}/>}  
      {hasError && <p>Something went wrong ...</p>}
      {loaded && <UserCard/>}
   
    </div>
  );
}



export default NewUser;
