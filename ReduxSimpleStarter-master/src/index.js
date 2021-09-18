//import from node_modules
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//import components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

//api key from you tube
const API_KEY = 'AIzaSyA8ZBKA9vkzI1CJc9SIT1shD8iaGXxMpGs';

// Create a react component.
// This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
           this.setState({ videos: videos });
        });

    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

// Take this component`s generated HTML
// and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));