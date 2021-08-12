import React from 'react'
import { WelcomePage } from "./pages/WelcomePage"
import { BrowserRouter, Route, Switch } from 'react-router-dom'


export function App(){
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={WelcomePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}