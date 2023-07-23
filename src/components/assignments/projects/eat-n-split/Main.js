import React, { useState } from "react";
import FriendList from "./FriendList";
import "./index.css";
import Button from "../../items/button";
import FormAddFriend from "./FormAddFriend"; 
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Main() {
  const [friends, setFriends] = useState(initialFriends);
  const [toggleForm, setToggleForm] = useState(false);
  const AddFriends = (newFriend) => {
    setFriends((friends) => [...friends, newFriend]);
  }
  console.log(friends)
  return (
    <>
      <div className="sidebar">
        <FriendList initialFriends={friends} />
        {toggleForm && <FormAddFriend AddFriends = {AddFriends}/> }
        <div className="buttons">
          <Button
            onClick={() => setToggleForm(!toggleForm)}
            backgroundColor="pink"
            textColor="green"
          >
            {toggleForm ? "Close" : "Add Friend"}
          </Button>
        </div>
      </div>
    </>
  );
}

export default Main;
