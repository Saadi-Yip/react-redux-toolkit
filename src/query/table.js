import React, { useState } from "react";
import Button from "./button";
import useCrudApi from "../hooks/useCrudApi";
import Form from './form'
function Table() {
  const { data, isLoading, isError,error, getSingleItem, deleteItem } = useCrudApi("/project"); 
  const [singleUser, setSingleUser] = useState(null);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error}</div>;
  }
const updateHandler = async (id) => {
   const user = await getSingleItem(id);
   console.log(user);
   setSingleUser(user);
}
  return (
    <div class="container">
        {
            singleUser && <Form user = {singleUser}/>
        }
      <div class="table">
        <div class="table-header">
          
          <div class="header__item">Image</div>
          <div class="header__item">Name</div> 
          <div class="header__item">Link</div>
          <div class="header__item">Actions</div>
        </div>
        <div class="table-content">
          {data?.data?.projects.map((item, index) => (
            <div class="table-row" key={index}>
              
              <div class="table-data">
                <img src={item.image} alt="" className="table-img" />
              </div>
              <div class="table-data">{item.name}</div> 
              <div class="table-data">
                <a href={item.url}>{item.url}</a>
              </div>
              <div class="table-data actions">
                <Button
                  className="update-button"
                  text="Update"
                  onClick={ () =>updateHandler(item._id)}
                  
                />
                <Button
                  className="delete-button"
                  onClick={() => deleteItem(item._id)}
                  text="Delete"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
