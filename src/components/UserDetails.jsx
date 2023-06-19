import React, {useState} from "react"; 
import { useDispatch } from "react-redux";
import { userSlice } from "./store/slices/UserSlice";
import styled from "styled-components";

const UserDetails = (props) => {
  const [data, setData] = useState();
  const addUser = userSlice.actions.addUser;
  const removeUser = userSlice.actions.removeUser;
  const dispatch = useDispatch();
const removeUsers = (id) => {
  dispatch(removeUser(id));
  console.log("id", id);
}
const removeAll = () => {
  dispatch (userSlice.actions.deleteAllUsers());
}
const handleChange = (e) => { 
  let key = e.target.name; 
  let id = Math.random();
  setData({...data, id,[key]: e.target.value}) 
}
 
const handleSubmit = (e) => {
  e.preventDefault(); 
  dispatch(addUser(data));
}
  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" onChange={handleChange}/>
            <input type="text" name="age" placeholder="age" onChange={handleChange}/>
            <input type="email" name="email" placeholder="email" onChange={handleChange}/>
            <input type="text" name="phone" placeholder="phone" onChange= {handleChange}/>
            <button className="btn add-btn" type="submit">Add New Users</button>
          </form>
        </div>
        <ul>
         {props.data && props.data.map((resp, index) =>{
             return <li key = {resp.id}>
                {resp.name}
                <span><button onClick={() =>removeUsers(resp.id)}>delete</button></span>
             </li>
         })
        }
        </ul>
        <hr /> 
        <button onClick={removeAll} >Remove All Users</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;