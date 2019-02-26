import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import './App.scss'
import Header from './Container/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Header />
            <div>
              {Routes.map((route, i) => {
                return <div key={i}>adasd</div>
              })}
            </div>
          </Fragment>
        </Router>
      </div>
    )
  }
}

export default App
