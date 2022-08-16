const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  let {good, ok, bad} = state
  let newState = {}
  
  switch (action.type) {
    case 'GOOD':
      newState = {good:good+1, ok, bad}
      return newState
    case 'OK':
      newState = {good, ok:ok+1, bad}
      return newState
    case 'BAD':
      newState = {good, ok, bad:bad+1}
      return newState
    case 'ZERO':
      newState = {good:0, ok:0, bad:0}
      return newState
    default: return state
  }
  
}

export default counterReducer