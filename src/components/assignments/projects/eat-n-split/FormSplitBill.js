import React from "react";
import Button from "../../items/button";

function FormSplitBill({friends}) { 
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {friends[0].name}</h2>
      <label>🧢Bill Value</label>
      <input type="text" />
      <label>💰Your Expense</label>
      <input type="text" />
      <label>😑{friends[0].name} Expense</label>
      <input type="text" />
      <label>😝Paying</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{friends[0].name}</option>
      </select>
      <div className="buttons">
        <Button backgroundColor="green" textColor="white">
          Split Bill
        </Button>
      </div>
    </form>
  );
}

export default FormSplitBill;
