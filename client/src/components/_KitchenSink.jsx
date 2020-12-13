import React from 'react';

const Button = (props) => {
    return (
        <input
            type="button"
            className={`button button--${props.type}`}
            value={props.value}
        />
    );
};

export default Button;

/* <Post
        id={this.state.id}
        userName={this.state.userName}
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
            <div className="post__header">
                <img
                    src={`../assets/avatars/${props.id}.jpg`}
                    alt="User avatar"
                    className="post__avatar"
                />
                <div className="post__name-wrapper">
                    <p className="post__user-name">
                        <a
                            className="post__user-name--link"
                            href={`/user/${props.id}`}
                        >
                            {props.userName}
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

/* This code is for the "lookingFor" thing. Maybe I should make it a function?

        {lookingFor.length ? (
          <ul>
            {lookingFor.map((skill) => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
        ) : (
          <DonutSpinner />
        )}
*/

export default Post;

import React from 'react';
import Post from '../Post/Post';

const Feed = (props) => {
    return (
        <div className="feed">
            <Post
                id="1"
                userName="TestName"
                type="band"
                lookingFor="guitarist"
                updatedAt="just now"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <Post
                id="3"
                userName="SecondName"
                type="artist"
                updatedAt="about now"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
        </div>
    );
};

export default Feed;

