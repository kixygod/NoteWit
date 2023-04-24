import React from "react";
import { ReactComponent as AddIcon } from "../assets/add.svg";

const AddButton = () => {
  return <div>
    <a href="/note/new" className="floating-button">
        <AddIcon/>
    </a>

  </div>;
};

export default AddButton;
