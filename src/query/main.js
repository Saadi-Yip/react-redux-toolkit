import "./style.css";
import React from "react";
import Table from "./table";
import { Link } from "react-router-dom";
import Button from "./button";
function Main() {
  return (
    <>
      <div className="main">
        <Link to="/form">
          <Button className="button-29" text="Add Category" />
        </Link>
        <Table />
      </div>
    </>
  );
}

export default Main;
