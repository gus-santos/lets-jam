/* [TBC] Get rid of magic number in
    {props.id === 1 HERE
        ? <a href={`/user/1/edit`} HERE className="user-profile__link">Edit</a>
        : ""}
*/

import React from "react";

const UserProfileDiv = (props) => {
    return (
        <div className="user-profile ">
            <img
                src={`../assets/avatars/${props.id}.jpg`}
                alt="User avatar"
                className="user-profile__avatar"
            />
            <div className="user-profile__info-wrapper">
                <p className="user-profile__info">Screen name:&nbsp;{props.screenName}</p>
                <p className="user-profile__info">About:&nbsp;{props.about}</p>
                {props.type=== "artist"
                    ? <p className="user-profile__info">Name:&nbsp;{props.firstName} {props.lastName}</p>
                    : ""}
                <p className="user-profile__info">Postal code:&nbsp;
                    <a href={`https://www.google.com/maps/dir//${props.postalCode}`} className="user-profile__link">{props.postalCode}</a>
                </p>
                {props.skills ? <p className="user-profile__info">Skills:&nbsp;{props.skills}</p> : ""}
                {props.lookingFor ? <p className="user-profile__info">Looking for:&nbsp;{props.lookingFor}</p> : ""}
                <p className="user-profile__info">E-mail:&nbsp;
                    <a href={`mailto:${props.email}`} className="user-profile__link">{props.email}</a>
                </p>
                {props.id === 1
                    ? <a href={`/user/1/edit`} className="user-profile__link">Edit</a>
                    : ""}
            </div>
        </div>
    );
}

export default UserProfileDiv;