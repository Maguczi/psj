import React, { Component, Fragment, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './Routes'
import './App.scss'
import Header from './Container/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Header routes={Routes} />

            <Suspense fallback={<div>Loading...</div>}>
              {Routes.map((route, i) => {
                return (
                  <Route
                    key={i}
                    {...route}
                  />
                )
              })}
            </Suspense>
          </Fragment>
        </Router>
      </div>
    )
  }
}

export default App
