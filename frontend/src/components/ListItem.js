import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  return (
    <div>
      <Link to={`/note/${note.id}`}>
        <h3>{note.title}</h3>
      </Link>
      <p>{note.body}</p>
      <br />
    </div>
  );
};

export default ListItem;
