import React, { Component } from 'react';

class PostsIndex extends Component{
    componentWillMount(){
        console.log("this componentWillMount");
    }

    render() {
        return (
            <div>List of blog posts</div>
        )
    }
}

export default PostsIndex;