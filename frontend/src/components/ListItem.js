import React from "react";

const ListItem = ({ note }) => {
  return (
    <a href={`/note/${note.id}`}>
      <h3>{note.title}</h3>
    </a>
  );
};

export default ListItem;
