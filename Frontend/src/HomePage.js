import { useEffect, useState, React } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './App.css';

export default function HomePage() {
    let [responseData, setResponseData] = useState([])
    async function deleteNote(id) {
        console.log("Entered here", id)
        await axios.delete("https://notes-backend-bu1t.onrender.com/deletenote/" + id)
        constData()
    }
    async function constData() {
        try {
            const response = await axios.get("https://notes-backend-bu1t.onrender.com/allnotes")
            setResponseData(response.data)
            console.log(response.data)
        }
        catch (e) {
            console.log("Error", e)
        }
    }
    useEffect(() => { constData() }, [])
    return (
        <div className="container">
            <h3 className="text-center mt-3 text-primary"><u>My to-do List</u></h3>
            <ul style={{ listStyleType: 'square'}}>
                {responseData.map(note => {
                    return <div className="row" key={note._id}>
                        <li className="ms-3">
                            <span>{note.title}</span>
                            <Link to="/view" state={{note:note}}>
                                <button className="ms-3 mt-3 bg-white">View</button>
                            </Link>
                            <Link to="/edit" state={{note:note}}>
                                <button className="ms-3 mt-3 bg-white">Edit</button>
                            </Link>
                            <button className="ms-3 mt-3 bg-white" onClick={() => deleteNote(note._id)}>Delete</button>
                        </li>
                    </div>
                })}
            </ul>
            <div className="row">
                <Link to="/add">
                    <button id="add-button" className="btn-xl btn-circle bg-primary">+</button>
                </Link>
            </div>
        </div>
    )
}
