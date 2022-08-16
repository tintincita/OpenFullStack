import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import reducer from './reducers/anecdoteReducer'

const store = configureStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
