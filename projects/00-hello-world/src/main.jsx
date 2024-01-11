// Enter point of the application (root component) and render it to the DOM element with id 'root' in index.html file in public folder of the project (see index.html file in public folder) using React.StrictMode (see https://reactjs.org/docs/strict-mode.html) and React.createRoot (see https://reactjs.org/docs/concurrent-mode-reference.html#reactcreateroot) methods.

import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
)
