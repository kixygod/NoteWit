import React, { useState, useEffect } from "react";

const NotePage = ({ match }) => {
  let noteId = match.params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  });

  let getNote = async () => {
    let response = await fetch(`/api/notes/${noteId}/`);
    let data = await response.json();
    setNote(data);
  };
  return (
    <div>
      <h3>{note?.title}</h3>
      <p>{note?.body}</p>
    </div>
  );
};

export default NotePage;
