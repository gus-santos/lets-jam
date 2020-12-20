/* [TBC] Get rid of magic number in
    {this.state.id === 1 HERE
        ? <a href={`/user/1/edit`} HERE className="user-profile__link">Edit</a>
        : ""}
*/

import React from "react";
import axios from "axios";

class UserProfile extends React.Component {
    state = {};
    
    
    componentDidMount() {
        let loggedUser = 1; // [TBC]
        if(this.props.match.params.id){
            loggedUser = this.props.match.params.id
        };

        axios
            .get(`http://localhost:5000/user/${loggedUser}`)
            .then((response) => {
                this.setState(response.data);
            });
    }

    render() {
        return (
            <div className="user-profile ">
                <img
                    src={`../assets/avatars/${this.state.id}.jpg`}
                    alt="User avatar"
                    className="user-profile__avatar"
                />
                <div className="user-profile__info-wrapper">
                    <p className="user-profile__info">Screen name:&nbsp;{this.state.screenName}</p>
                    <p className="user-profile__info">About:&nbsp;{this.state.about}</p>
                    {this.state.type=== "artist"
                        ? <p className="user-profile__info">Name:&nbsp;{this.state.firstName} {this.state.lastName}</p>
                        : ""}
                    <p className="user-profile__info">Postal code:&nbsp;{this.state.postalCode}</p>
                    {this.state.skills ? <p className="user-profile__info">Skills:&nbsp;{this.state.skills}</p> : ""}
                    {this.state.lookingFor ? <p className="user-profile__info">Looking for:&nbsp;{this.state.lookingFor}</p> : ""}
                    <p className="user-profile__info">E-mail:&nbsp;
                        <a href={`mailto:${this.state.email}`} className="user-profile__link">{this.state.email}</a>
                    </p>
                    {this.state.id === 1
                        ? <a href={`/user/1/edit`} className="user-profile__link">Edit</a>
                        : ""}
                </div>
            </div>
        );
    }
}

export default UserProfile;