import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCrudApi from "../hooks/useCrudApi";
import "./form.css";
function Form({ user }) {
  const { isLoading, isError, error, createItem, updateData } = useCrudApi("/project");
  const basicData = user?user.data.project: {}
  const [formsData, setFormData] = useState(basicData);
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error}</div>;
  }
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      image && formData.append("image", image, image.name);
      formData.append("url", formsData.url);
      formData.append("name", formsData.name);
      formData.append("category", formsData.category);
      let data = { id: user?.data.project._id, project: formData };
      user ? updateData(data) : createItem(formData);
      setFormData({});
      navigate("/");
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Image upload failed:", error);
    }
  };

  return (
    <form className="form">
      <p class="title">{`${user ? user?.data.project.name : "Portfolio"}`}</p>
      <p class="message">You Can Add New Projects to Solitary Dev </p>
      <div class="flex">
        <label>
          <input
            placeholder="Name..."
            value={formsData.name}
            onChange={changeHandler}
            type="text"
            name="name"
            class="input"
          />
        </label>

        <label>
          <input
            placeholder="Url..."
            value={formsData.url}
            onChange={changeHandler}
            type="text"
            name="url"
            class="input"
          />
        </label>
      </div>

      <label>
        <input
          placeholder="Category..."
          value={formsData.category}
          onChange={changeHandler}
          type="text"
          name="category"
          class="input"
        />
      </label>
      <label>
        <input
          onChange={handleImageChange}
          type="file"
          class="input"
          name="image"
        />
      </label>
      {user && !image && (
        <img
          src={user?.data.project.image}
          alt=""
          style={{ height: "50px", width: "50px", margin: "0 auto" }}
        />
      )}

      <button className="submit" onClick={handleSubmit}>{`${
        user ? "Update" : "Submit"
      }`}</button>
    </form>
  );
}

export default Form;
