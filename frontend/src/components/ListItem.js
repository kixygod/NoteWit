import React from "react";

const ListItem = ({ note }) => {
  return (
    <a href={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{note.title}</h3>
      </div>
    </a>
  );
};

export default ListItem;
