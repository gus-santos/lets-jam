/* <Feed /> */

import React from "react";
import axios from "axios";
// import Post from "../Post/Post";

class Feed extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/posts`)
            .then((response) => {
                this.setState({
                    posts: response.data
                });
            });
    }

    render() {
        const { posts } = this.state;

        return (
            <div>
            {posts.length ? (
                <ul>
                  {posts.map((post) => (
                    <p key={post.id}>{post.author} {post.content}</p>
                  ))}
                </ul>
              ) : (
                <p>There are no posts to be shown</p>
              )}
            </div>
        );
    }
};

export default Feed;