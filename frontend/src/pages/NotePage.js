import React, { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = ({ match, history }) => {
  let noteId = match.params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, [noteId]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${noteId}/`);
    let data = await response.json();
    setNote(data);
  };

  let updateNote = async () => {
    fetch(`/api/notes/${noteId}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let handleSubmit = () => {
    updateNote();
    history.push("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <a onClick={handleSubmit} href="/">
            <ArrowLeft />
          </a>
          <h4>{note?.title}</h4>
        </h3>
      </div>

      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        defaultValue={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
