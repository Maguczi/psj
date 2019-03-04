import React, { Fragment, Suspense, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss'

import { fetchRouters } from './Routers';
import useEffectAsync from './useEffectAsync';

import Header from './Container/Header/Header'
const NotFound = React.lazy(() => import('./Components/NotFound/NotFound'));
const Home = React.lazy(() => import('./Components/Home/Home'));


const app = () => {
  console.log('Component %c"app"', 'color: #FF5067', 'loaded');

  const [routers, setRouters] = useState([]);

  useEffectAsync(async () => {
    const routers = await fetchRouters();
    setRouters(routers);
  }, []);

  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header routes={routers} />

          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {routers.map((route, i) => {
                  return (
                    <Route
                      key={i}
                      {...route}
                    />
                  )
                })}
                <Route exact path="/" component={Home} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Suspense>
          </main>
        </Fragment>
      </Router>
    </div>
  )
}

export default app
