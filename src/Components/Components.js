import React from 'react'

const News = React.lazy(() => import('./News/News'));
const Magazine = React.lazy(() => import('./Magazine/Magazine'));
const Contact = React.lazy(() => import('./Contact/Contact'));

const Components = {
    News: News,
    Magazine: Magazine,
    Contact: Contact
};

export default Components;