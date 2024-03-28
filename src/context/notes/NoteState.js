import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {

  const host = "http://localhost:5000";

  const notesInitialize = []



  const [notes, setNotes] = useState(notesInitialize);

  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmYTkzODljZTQzM2ZjZGI5MTkyNmY3In0sImlhdCI6MTcxMTE4NTk1Nn0.VYZyhcam_bTS9XgZba2Ebw9HTRbM2K0oLAWFdJxrO-o"
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);

  }

  // Add a note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmYTkzODljZTQzM2ZjZGI5MTkyNmY3In0sImlhdCI6MTcxMTE4NTk1Nn0.VYZyhcam_bTS9XgZba2Ebw9HTRbM2K0oLAWFdJxrO-o"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json);

    //Logic to add note
    console.log('Adding')
    const note = json
    setNotes(notes.concat(note))
  }

  // Delete a note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmYTkzODljZTQzM2ZjZGI5MTkyNmY3In0sImlhdCI6MTcxMTE4NTk1Nn0.VYZyhcam_bTS9XgZba2Ebw9HTRbM2K0oLAWFdJxrO-o"
      },
    });
    const json = await response.json();
    console.log(json);

  // Logic to delete Note
    const newNote = notes.filter((note) => {
      return note._id !== id;
    })
    setNotes(newNote)
    console.log("Deleting the note of id" + id);
  }

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmYTkzODljZTQzM2ZjZGI5MTkyNmY3In0sImlhdCI6MTcxMTE4NTk1Nn0.VYZyhcam_bTS9XgZba2Ebw9HTRbM2K0oLAWFdJxrO-o"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json);
    // const json = response.json();

    // Logic to edit note
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;