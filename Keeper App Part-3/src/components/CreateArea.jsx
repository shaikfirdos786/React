import React, { useState } from "react";

function CreateArea(props) {
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNotes((preNotes) => ({
      ...preNotes,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    props.newNote(notes);
    setNotes({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={notes.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={notes.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
