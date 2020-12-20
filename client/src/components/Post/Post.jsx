// [TBC] likes, comments

import React from 'react';
import axios from "axios";

class Post extends React.Component {
    state = {};

    componentDidMount() {
        axios
            .get(`http://localhost:5000/user/${this.props.author}`)
            .then((response) => {
                this.setState(response.data);
            });
    }

    render() {
        return (
            <fieldset className="post" id={this.props.id}>
                <div className="post__heading">
                    <a href={`/user/${this.props.author}`} className="post__avatar--link">
                        <img
                            src={`../assets/avatars/${this.props.author}.jpg`}
                            alt="User avatar"
                            className="post__avatar"
                        />
                    </a>
                    <div className="post__name-wrapper">
                        <p className="post__user-name">
                            <a
                                className="post__user-name--link"
                                href={`/user/${this.props.author}`}
                            >
                                {this.state.screenName}
                            </a>
                            {this.state.type === "band"
                                ? <span className="post__info">{` — looking for ${this.state.lookingFor}`}</span>
                                : (this.state.type === "artist"
                                ? <span className="post__info">{` — plays the ${this.state.skills}`}</span>
                                : "")
                            }
                        </p>
                        <p className="post__date">
                            {this.state.updatedAt}
                        </p>
                    </div>
                </div>
                <pre className="post__content">{this.props.content}</pre>
            </fieldset>
        );
    }
};

export default Post;