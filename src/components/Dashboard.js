import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Router>
        <Switch>
          <Route path="/" component={Registration} />
          <Route path="/voting" component={Voting} />
          <Route path="/results" component={Results} />
        </Switch>
      </Router>
    </div>
  );
}
