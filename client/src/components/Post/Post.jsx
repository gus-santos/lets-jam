// [TBC] likes, comments

import React from 'react';
import axios from "axios";
import TimeAgo from 'react-timeago';
class Post extends React.Component {
    state = {};

    // [Q] I wanted to destructure props but I can't declare a variable in a class function?

    componentDidMount = async () => {
        await axios
            .get(`http://localhost:5000/user/${this.props.author}`)
            .then((response) => {
                this.setState(response.data);
            });
    }

    render() {
        return (
            <article className="post" id={this.props.id}>
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
                                href={`/user/${this.props.author}`} // [Q] Any advantage to using this.state.id?
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
                        {/* I didn't mean for it to be a seconds counter but hey, it works */}
                        <p className="post__date">
                            <TimeAgo date={new Date(this.props.updatedAt).toString()} />
                        </p>
                    </div>
                </div>
                <pre className="post__content">{this.props.content}</pre>
            </article>
        );
    }
};

export default Post;