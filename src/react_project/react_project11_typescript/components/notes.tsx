import { Note } from '../models/note.model';
import './notes.css';

interface INotesProps {
    note:Note,
    handleDel:(id:string) => void
}

const Notes:React.FC<INotesProps> = ({note, handleDel}) => {
    return(
        <>
         <div className="notes-container">
            <h3>{note.title}</h3>
            <p className="text-light">{note.body}</p>
            <button className="notes-btn" onClick={() => handleDel(note.id)}>Delete</button>
        </div>
        </>
    )
}       
export default Notes;