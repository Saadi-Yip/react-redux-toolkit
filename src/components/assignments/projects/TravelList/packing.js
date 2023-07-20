import React, { useState } from "react";

const Packing = ({ item, handleDeleteItems, handleToggleItem, onClear }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedList;
  if (sortBy === "input") {
    sortedList = item;
  } else if (sortBy === "description") {
    sortedList = item.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "packed") {
    sortedList = item.slice().sort((a, b) => Number(b.packed) - Number(a.packed));
  } else {
    sortedList = '';
  }
  return (
    <div className="list">
      <ul>
        {sortedList && sortedList?.map((i, index) => {
          return (
            <li key={i.id}>
              <input
                type="checkbox"
                value={i.packed}
                onChange={() => {
                  handleToggleItem(i.id);
                }}
              />
              <span
                style={{ textDecoration: `${i.packed ? "line-through" : ""}` }}
              >
                {i?.quantity} {i?.name}
              </span>
              <button
                onClick={() => {
                  handleDeleteItems(i.id);
                }}
              >
                ❎
              </button>
            </li>
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      <button onClick={() =>onClear()}>clear list</button>
      </div>
    </div>
  );
};

export default Packing;
