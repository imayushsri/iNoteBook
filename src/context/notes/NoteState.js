import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{

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

   return (
   <noteContext.Provider value={{notes, setNotes}}>
       {props.children}
   </noteContext.Provider>
   )
}

export default NoteState;