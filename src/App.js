import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Quiz1 from './quizzes/Quiz1'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/quiz-1">
          <Quiz1 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App