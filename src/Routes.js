import React from 'react'

const Home = React.lazy(() => import('./Pages/Home/Home'));
const News = React.lazy(() => import('./Pages/News/News'));
const Magazine = React.lazy(() => import('./Pages/Magazine/Magazine'));
const Contact = React.lazy(() => import('./Pages/Contact/Contact'));

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home,
    exact: true
  },
  {
    path: '/news',
    name: "News",
    component: News
  },
  {
    path: '/magazine',
    name: "Magazine",
    component: Magazine
  },
  {
    path: '/contact',
    name: "Contact",
    component: Contact
  }
]

export default routes
