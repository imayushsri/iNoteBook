import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {

  const notesInitialize = [
    {
      "_id": "65feb0396affa327df23264d",
      "user": "65fa9389ce433fcdb91926f7",
      "title": "My Title",
      "description": "My description is this description.",
      "tag": "personal",
      "date": "2024-03-23T10:34:33.249Z",
      "__v": 0
    },
    {
      "_id": "65feb0396affa327df23264f",
      "user": "65fa9389ce433fcdb91926f7",
      "title": "My Title",
      "description": "My description is this description.",
      "tag": "personal",
      "date": "2024-03-23T10:34:33.980Z",
      "__v": 0
    },
    {
      "_id": "65feb250066e0bc1b75fdbd4",
      "user": "65fa9389ce433fcdb91926f7",
      "title": "My Title",
      "description": "My description is this description.",
      "tag": "personal",
      "date": "2024-03-23T10:43:28.210Z",
      "__v": 0
    }
  ]



  const [notes, setNotes] = useState(notesInitialize);

  // Add a note
  const addNote = (title, description, tag) => {
    // API TODO
    console.log('Adding')
    const note =  {
      "_id": "65feb250066e0bc1b75fdbd4",
      "user": "65fa9389ce433fcdb91926f7",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-03-23T10:43:28.210Z",
      "__v": 0
    };
setNotes(notes.concat(note))
  }

  // Delete a note
  const deleteNote = (id) => {
      // API TODO
    const newNote = notes.filter((note)=>{
         return note._id !== id;
    })
    setNotes(newNote)
    console.log("Deleting the note of id"+id);
  }

  // Edit a note
  const editNote = (id, title, description, tag) => {

  }

  return (
    <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote}}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;