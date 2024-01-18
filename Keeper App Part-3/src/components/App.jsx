import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArray, setNotesArray] = useState([]);

  function handleNote(note) {
    setNotesArray((prevNotes) => [...prevNotes, note]);
  }

  function handleDelete(id) {
    setNotesArray((prevNotes) => {
      return prevNotes.filter((element, index) => {
        return index !== id;
      });
    });
  }
  console.log(notesArray);
  return (
    <div>
      <Header />
      <CreateArea newNote={handleNote} />
      {notesArray.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          currentPost={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
