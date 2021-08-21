import React, { useState } from 'react'
import { WelcomePage } from "./pages/WelcomePage"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from "./pages/HomePage"
import { OpenFormContext } from "./providers/formContext"


export function App(){

  const [openForm, setOpenForm] = useState(false)

  const [reload, setReload] = useState(false)

  const stateForm = {
    openForm: openForm,
    setOpenForm: setOpenForm,
    reload: reload,
    setReload: setReload
  }

  return (
    <div className="app">
      <OpenFormContext.Provider value={stateForm}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={WelcomePage}/>
            <Route path="/home" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </OpenFormContext.Provider>
      
    </div>
  )
}