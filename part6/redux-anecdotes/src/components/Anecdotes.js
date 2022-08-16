import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdotes = (props) => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    anecdotes.sort(function (a, b) {
        return b.votes - a.votes;
      })
console.log('ordered anecdotes', anecdotes);
    

    return (
        <span>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
                    </div>
                </div>
            )}
        </span>
    )
}

export default Anecdotes