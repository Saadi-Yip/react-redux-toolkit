import React, { useState } from "react";
import Button from "../../items/button";

function FormAddFriend({AddFriends}) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const handleFriend = (e) =>{
        e.preventDefault();
        if(!name || !image) return;
        const user = {
            name, image, id:Math.floor((Math.random() + 1)*1000), balance:0
        }
        console.log(user)
        AddFriends(user);
        setName("");
        setImage("");
    }
  return (
    <form className="form-add-friend">
      <label>🕹 Friend</label>
      <input type="text" value={name} onChange={(e) =>setName(e.target.value)}/>
      <label>🙍 Image </label>
      <input type="text" value={image} onChange={(e) =>setImage(e.target.value)}/>
      <div className="buttons">
        <Button backgroundColor="green" textColor="white" onClick = {handleFriend}>
          Add
        </Button>
      </div>
    </form>
  );
}

export default FormAddFriend;
