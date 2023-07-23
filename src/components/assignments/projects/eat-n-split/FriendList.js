import React, { useState } from "react";
import Button from "../../items/button";
import FormSplitBill from "./FormSplitBill";
function FriendList({ initialFriends }) {
  const [toggle, setToggle] = useState(false);
  const [friends, setFriends] = useState("");
  const [id,setId] = useState(null);
  const handleSelectFriend = (id) => {
    setToggle(!toggle);
    const data = initialFriends.filter((friend) => friend.id === id);
    console.log(data);
    setFriends(data);
    setId(id);
  }; 
  return (
    <ul className="sidebar">
      {initialFriends.map((friend, index) => {
        return (
          <li key={index}>
            <img src={friend.image} alt="" />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
              <p className="red">
                {" "}
                You $ {Math.abs(friend.balance)} from {friend.name}
              </p>
            )}
            {friend.balance > 0 && (
              <p className="green">
                {" "}
                You gave $ {Math.abs(friend.balance)} to {friend.name}
              </p>
            )}
            {friend.balance === 0 && <p> You and {friend.name} are even</p>}
            <div className="buttons">
              <Button
                textColor="black"
                backgroundColor="pink"
                onClick={() => handleSelectFriend(friend.id)}
              >
                {id === friend.id ? "Close" : "Select"}
              </Button>
            </div>
          </li>
        );
      })}
      {toggle && <FormSplitBill friends={friends} />}
    </ul>
  );
}

export default FriendList;
