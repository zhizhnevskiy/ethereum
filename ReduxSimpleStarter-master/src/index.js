//import from node_modules
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//import components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

//api key from you tube
const API_KEY = 'AIzaSyBpUt0p8nVjn3erG63Y_LMmQPP1fkh-31M';

// Create a react component.
// This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    onSearchTermChange={term => this.videoSearch(term)}
                />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

// Take this component`s generated HTML
// and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));