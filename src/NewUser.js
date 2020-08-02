import React, { useState} from "react";

const END_POINT = "https://randomuser.me/api/?results=5";

function NewUser() {
  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchUser = async () => {
    setLoaded(false);
    const response = await fetch(END_POINT);
    response
      .json()
      .then((res) => {
          console.log(res);
        const {
          name: { title, first, last },
          picture: { medium },
          id,
        } = res.results[0];
        setUser({ title, first, last, medium, id });
        setLoaded(true);
      })
      .catch((error) => {
        setHasError(true);
        setLoaded(false);
      });
  };

  return (
    <div>
      <Button func={fetchUser} context="Get New User" />
      {loaded && <UserProfile user={user} />}
      {hasError && <p>Something went wrong ...</p>}
    </div>
  );
}

function UserProfile({ user }) {
  return (
    <div>
      <div>
        <p>
          {user.title} {user.first} {user.last}
        </p>
        <img src={user.medium} alt="user image" />
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <div>
      <button onClick={props.func}>{props.context}</button>
    </div>
  );
}

export default NewUser;
