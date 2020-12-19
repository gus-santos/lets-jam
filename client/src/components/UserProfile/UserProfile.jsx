import React from "react";
import axios from "axios";

class UserProfile extends React.Component {
    state = {
        screenName: "",
        about: "",
        firstName: "",
        lastName: "",
        postalCode: "",
        skills: "",
        lookingFor: ""
    };

    componentDidMount() {
        let id;
        if(this.props.match.params.id){
            id = this.props.match.params.id
        } else {id = 1};

        axios
            .get(`http://localhost:5000/user/${id}`)
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
                    {this.state.type === "band"
                        ? <p className="user-profile__info">1.8 Km away</p>
                        : ""}
                    {this.state.skills ? <p className="user-profile__info">Skills:&nbsp;{this.state.skills}</p> : ""}
                    {this.state.lookingFor ? <p className="user-profile__info">Looking for:&nbsp;{this.state.lookingFor}</p> : ""}
                    <p className="user-profile__info">E-mail:&nbsp;
                        <a href={`mailto:${this.state.email}`} className="user-profile__link">{this.state.email}</a>
                    </p>
                    {this.state.id === 1
                        ? <a href="/user/edit/1" className="user-profile__link">Edit</a>
                        : ""}
                    
                </div>
            </div>
        );
    }
}

export default UserProfile;