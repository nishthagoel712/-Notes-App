import { useState, React } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AddNote() {
  let [newNoteTitle, setNewNoteTitle] = useState("")
  let [newNote, setNewNote] = useState("")
  let navigate = useNavigate();
  async function handleChangeNote(event) {
    setNewNote(event.target.value);
  }
  async function handleChangeTitle(event) {
    setNewNoteTitle(event.target.value);
  }
  async function handleSubmit() {
    console.log("Entered here", newNote, newNoteTitle)
    await axios.post("https://notes-backend-bu1t.onrender.com/create", {
      "title": newNoteTitle,
      "note": newNote
    })
    navigate("/")
  }
  return (
    <div>
      <div className="form-group">
        <label className="mt-3 ms-3">
          Title:
          <input className="mt-3 ms-3" type="text" value={newNoteTitle} name="name" onChange={handleChangeTitle} />
        </label>
        <br />
        <label className="mt-3 ms-3" for="exampleFormControlTextarea2">Please enter your new note...</label>
        <textarea className="form-control rounded-0 mt-3 ms-3" id="exampleFormControlTextarea2" rows="3" value={newNote} onChange={handleChangeNote}></textarea>
      </div>
      <br />
      <button className="mt-3 ms-3 bg-primary" onClick={handleSubmit}> Add </button>
    </div>
  )
}