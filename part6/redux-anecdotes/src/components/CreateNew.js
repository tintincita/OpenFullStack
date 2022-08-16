import { useDispatch } from 'react-redux'
import { createAnecdote } from "../reducers/anecdoteReducer"

const CreateNew = () => {
const dispatch = useDispatch()

const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
}
    return (
        <span>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote"/></div>
                <button>create</button>
            </form>
        </span>
    )
}

export default CreateNew