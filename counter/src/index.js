import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.js'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import noteService from './services/notes.js'
import noteReducer, { setNotes } from './reducers/noteReducer.js'
import filterReducer from './reducers/filterReducer.js'


const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
})
console.log(store.getState());

noteService.getAll().then(notes =>
    store.dispatch(setNotes(notes))
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
  )