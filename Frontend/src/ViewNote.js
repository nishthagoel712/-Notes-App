import { React } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export default function ViewNote() {
    const {state} = useLocation()
    return (
        <div>
            <div>
                <h5 className="mt-3 ms-3">Title:</h5>
                <p className="mt-3 ms-3">{state.note.title}</p>
                <p className="mt-3 ms-3">{state.note.note}</p>
            </div>
            <Link to="/">
                <button className="mt-3 ms-3 bg-primary"> Back </button>
            </Link>
        </div>
    )
}