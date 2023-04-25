import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = ({ match, history }) => {
  let noteId = match.params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, [noteId]);

  let getNote = async () => {
    if (noteId === "new") return;

    let response = await fetch(`/api/notes/${noteId}/`);
    let data = await response.json();
    setNote(data);
  };

  let createNote = async () => {
    fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // title: JSON.stringify("newNote"),
      body: JSON.stringify(note),
    });
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

  let deleteNote = async () => {
    fetch(`/api/notes/${noteId}/delete/`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.push("/");
    window.location.reload();
  };

  let handleSubmit = () => {
    if (noteId !== "new" && note.body === "") {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    } else if (noteId === "new" && note !== null) {
      createNote();
      titleChange();
    }
    history.push("/");
    window.location.reload();
  };

  let handleChange = (value) => {
    setNote((note) => ({ ...note, body: value }));
    //console.log("Hangle Change:", note);
  };

  let titleChange = (value) => {
    setNote((note) => ({ ...note, title: value }));
    console.log("Hangle Change:", note);
  };

  let handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Отменить создание новой строки
    }
  };

  let handleWheel = (event) => {
    event.preventDefault(); // Отменить прокрутку мышью
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <a onClick={handleSubmit} href="/">
            <ArrowLeft />
          </a>
          {/* <h4>{note?.title}</h4> */}
          <h4>
            <textarea
              onWheel={handleWheel}
              onKeyDown={handleKeyDown}
              className="titlearea"
              onChange={(e) => {
                titleChange(e.target.value);
              }}
              value={note?.title}
            ></textarea>
          </h4>
        </h3>
        {noteId !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>

      <textarea
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
