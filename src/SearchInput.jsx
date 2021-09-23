import React from "react";
import axios from 'axios';
import Imagelist from './imagelist'
import './imagelist.css'

class SearchImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "", key: [] }
        this.myfun = this.myfun.bind(this);
        this.onformsubmit = this.onformsubmit.bind(this)
    }

    myfun(event) {
        //console.log(event.target.value)// target.value gives input tag content
        this.setState({ value: event.target.value })
    }

    async onformsubmit(event) {
        event.preventDefault();
        var n = await axios.get(`https://pixabay.com/api/?key=23297794-708b7f358c79ec2ced3d149e9&q=${this.state.value}&image_type=photo
        `)
        this.setState({ key: n.data.hits })
        console.log(n.data.hits[1])
    }

    render() {
        return ( 
            <form className="formin" onSubmit = { this.onformsubmit } >
                <h2>Enter Your Desired Image....</h2>
            <div className = "ui icon input" >
            <input type = "text"
            placeholder = "Search...."
            value = { this.state.value }
            onChange = { this.myfun } //It will check character by character whatever we put character in input
            /> 
            <i className = "search icon"> </i>
            </div> 
            <div className="images">
                <Imagelist images={this.state.key}/>
            </div>
            </form>
        );
    }
}

export default SearchImage;


