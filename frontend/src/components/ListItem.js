import React from "react";

const ListItem = ({ note }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <br />
    </div>
  );
};

export default ListItem;
