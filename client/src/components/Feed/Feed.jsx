/* <Feed /> */

import React from "react";
import axios from "axios";
import Post from "../Post/Post";
import AddEditPost from "../AddEditPost/AddEditPost";

class Feed extends React.Component {
    state = {
        posts: []
    }

    loggedUser = 0; // [TBC] Set to 0 to show all posts (it's filtered below)

    componentDidMount = async () => {
        await axios
            .get(`http://localhost:5000/posts`)
            .then((response) => {
                this.setState({
                    posts: response.data
                });
            });
    }

    render() {
        // Order posts by date
        const sortPosts = (arr) => arr.sort((a, b) => b.id - a.id);

        const sortedPosts = sortPosts(this.state.posts);

        return (
            
            <div className="feed__wrapper">
                <AddEditPost />

                {sortedPosts.length ? (
                <div className="feed">
                    {sortedPosts
                        .filter(sortedPosts => sortedPosts.author !== this.loggedUser)
                        .map((post) => (
                            <Post key={post.id} {...post} />
                        ))
                    }
                </div>
                ) : (
                    <p>There are no posts to be shown</p>
                )}
            </div>
        );
    }
};

export default Feed;