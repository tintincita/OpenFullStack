import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import NewNote from './components/newNote.js'
import Notes from './components/Notes.js'
import VisibilityFilter from './components/VisibilityFilter.js';

import noteService from './services/notes.js'
import { setNotes } from './reducers/noteReducer.js';

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        noteService.getAll().then(notes => dispatch(setNotes(notes)))
    }, []) // es-lint disable-line react-hooks/exhaustive-deps


    return (
        <div>
            <NewNote />
            <VisibilityFilter />
            <Notes />
        </div>
    )
}

export default App