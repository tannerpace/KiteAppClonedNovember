import "./styles.css"

import { createStore, StateMachineProvider } from "little-state-machine"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Result from "./Result"
import Step1 from "./Step1.jsx"
import Step2 from "./Step2"

createStore({})

function Profile() {
  return (
    <StateMachineProvider>
      <h1>Page Form Wizzard</h1>

      <Router>
        <Route exact path="/profile" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/result" component={Result} />
      </Router>
    </StateMachineProvider>
  )
}

export default Profile
