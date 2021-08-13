import React from 'react'
import { WelcomePage } from "./pages/WelcomePage"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from "./pages/HomePage"


export function App(){
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={WelcomePage}/>
          <Route path="/home" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}