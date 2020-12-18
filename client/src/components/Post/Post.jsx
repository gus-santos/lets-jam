/* <Post
        id={this.state.id}
        screenName={this.state.screenName}
        type={this.state.type}
        lookingFor={this.state.lookingFor}
        updatedAt={this.state.updatedAt}
        content={this.state.content}
    />
*/
// To do: likes, comments

import React from 'react';

const Post = (props) => {
    return (
        <article className="post">
            <div className="post__nav">
                <a href={`/user/${props.id}`} className="post__avatar--link">
                    <img
                        src={`../assets/avatars/${props.id}.jpg`}
                        alt="User avatar"
                        className="post__avatar"
                    />
                </a>
                <div className="post__name-wrapper">
                    <p className="post__user-name">
                        <a
                            className="post__user-name--link"
                            href={`/user/${props.id}`}
                        >
                            {props.screenName}
                        </a>
                        {props.type === "band"
                            ? <span className="post__looking-for">{` — looking for ${props.lookingFor}`}</span>
                            : ""
                        }
                    </p>
                    <p className="post__date">
                        {props.updatedAt}
                    </p>
                </div>
            </div>
            <p className="post__content">{props.content}</p>
        </article>
    );
};

export default Post;