import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


// 
import Nav from './component/Nav'
import HomePage from './page/HomePage'

function App() {

  return (
    <div>
      <Nav />
      <div className="body">
        <div className="all-content">
          <HomePage />
        </div>
      </div>
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#root'))