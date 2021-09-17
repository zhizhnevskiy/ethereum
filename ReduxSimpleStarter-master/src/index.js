import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA8ZBKA9vkzI1CJc9SIT1shD8iaGXxMpGs';

// Create a react component.
// This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component`s generated HTML
// and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));