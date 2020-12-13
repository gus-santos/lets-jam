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
            {lookingFor.map((warehouse) => (
              <li key={warehouse.id}>{warehouse.name}</li>
            ))}
          </ul>
        ) : (
          <DonutSpinner />
        )}
{(props.type === "band")
    ? ()
    : (<span className="post__looking-for">{`&#8212; looking for ${props.lookingFor}`}</span>)
}

*/

export default Post;