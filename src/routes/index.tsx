import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../pages/Home'
import NoteCreation from '../pages/NoteCreation'
import NoMatch from '../pages/NoMatch'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={NoteCreation} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
