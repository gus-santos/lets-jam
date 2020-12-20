/* <Feed /> */

import React from "react";
import axios from "axios";
import Post from "../Post/Post";

class Feed extends React.Component {
    state = {
        posts: []
    }

    loggedUser = 1; // [TBC]

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
            <div className="feed__wrapper">
                {posts.length ? (
                <div className="feed">
                    {posts.filter(posts => posts.author !== this.loggedUser).map((post) => (
                        <Post id={post.id} author={post.author} content={post.content} />
                    ))}
                </div>
                ) : (
                    <p>There are no posts to be shown</p>
                )}
            </div>
        );
    }
};

export default Feed;