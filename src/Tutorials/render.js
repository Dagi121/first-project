import React from 'react';
import ReactDOM from 'react-dom/client';

const Container = document.getElementById('sandy');
const root = ReactDOM.createRoot(Container);
root.render(<p>Hallo</p>);

export default Container;
/*
For this example to work on your project,
you must have a element with
id="sandy" on your "index.html" page.
*/