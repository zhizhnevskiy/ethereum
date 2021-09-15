import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component.
// This component should produce some HTML
const App = () => {
    return <div>Hi Yuriy!!!</div>;
}

// Take this component`s generated HTML
// and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));