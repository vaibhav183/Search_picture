import React from 'react';
import ReactDOM from 'react-dom';
import SearchImage from './SearchInput';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <SearchImage/>
        );
    }
}

ReactDOM.render( < App/> , document.getElementById("root"));