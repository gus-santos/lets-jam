import React from "react";
import axios from 'axios';

import Button from '../Button/Button';

class UserAddEdit extends React.Component {
    state = {};

    updateEmail = event => {
        this.setState({
            email: event.target.value
        });
    };

    updateScreenName = event => {
        this.setState({
            screenName: event.target.value
        });
    };
    
    updateType = event => {
        this.setState({
            type: event.target.value
        });
    };
    
    updateHealthSettings = event => {
        this.setState({
            healthSettings: event.target.value
        });
    };
    
    updateAbout = event => {
        this.setState({
            about: event.target.value
        });
    };
    
    updateFirstName = event => {
        this.setState({
            firstName: event.target.value
        });
    };
    
    updateLastName = event => {
        this.setState({
            lastName: event.target.value
        });
    };
    
    updatePostalCode = event => {
        this.setState({
            postalCode: event.target.value
        });
    };
    
    updateFavouriteStudio = event => {
        this.setState({
            favouriteStudio: event.target.value
        });
    };
    
    updateSkills = event => {
        this.setState({
            skills: event.target.value
        });
    };
    
    updateInstruments = event => {
        this.setState({
            instruments: event.target.value
        });
    };
    
    updateLookingFor = event => {
        this.setState({
            lookingFor: event.target.value
        });
    };

    handleClick = () => {
        if (this.props.match.path === "/user/:id/edit") {
            axios
                .put(`http://localhost:5000/user/${this.state.id}`, this.state)
                .then(alert("User has been updated"));
        } else if (this.props.match.path === "/add-user") {
            axios
                .post('http://localhost:5000/user/', this.state)
                .then(alert("User has been added"));
        }
    }

    trimString = str => {
        return str
            .replace('(', '')
            .replace(')', '')
            .replace(' ', '')
            .replace('-', '')
            .substr(0, 10);
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/user/${this.props.match.params.id}`)
            .then((response) => {
                this.setState(response.data);
            });
    }

    render() {
        return (
            <form className="add-edit">
                <fieldset>
                    <label className="add-edit__label field-row-stacked">
                        E-mail:&nbsp;
                        <input
                            type="text"
                            name="email"
                            defaultValue={this.state.email}
                            onChange={this.updateEmail}
                        />
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        Postal code:&nbsp;
                        <input
                            type="text"
                            name="postalCode"
                            defaultValue={this.state.postalCode}
                            onChange={this.updatePostalCode}
                        />
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        Artist or band:&nbsp;
                        <input
                            type="text"
                            name="type"
                            defaultValue={this.state.type}
                            onChange={this.updateType}
                        />
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        Screen name:&nbsp;
                        <input
                            type="text"
                            name="screenName"
                            defaultValue={this.state.screenName}
                            onChange={this.updateScreenName}
                        />
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        About:&nbsp;
                        <textarea
                            type="text"
                            name="about"
                            defaultValue={this.state.about}
                            onChange={this.updateAbout}
                        ></textarea>
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        First name:&nbsp;
                        <input
                            type="text"
                            name="firstName"
                            defaultValue={this.state.firstName}
                            onChange={this.updateFirstName}
                        />
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        Last name:&nbsp;
                        <input
                            type="text"
                            name="lastName"
                            defaultValue={this.state.lastName}
                            onChange={this.updateLastName}
                        />
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        Postal code:&nbsp;
                        <input
                            type="text"
                            name="postalCode"
                            defaultValue={this.state.postalCode}
                            onChange={this.updatePostalCode}
                        />
                    </label>
                    {
                        this.state.type === "artist"
                            ? <label className="add-edit__label field-row-stacked">
                                Skills:&nbsp;
                                <input
                                    type="text"
                                    name="skills"
                                    defaultValue={this.state.skills}
                                    onChange={this.updateSkills}
                                />
                            </label>
                            : <label className="add-edit__label field-row-stacked">
                                Looking for:&nbsp;
                                <input
                                    type="text"
                                    name="lookingFor"
                                    defaultValue={this.state.lookingFor}
                                    onChange={this.updateLookingFor}
                                />
                            </label>
                    }
                    <div className="add-edit__button-wrapper">
                        <Button
                            type="submit"
                            label="Submit"
                            onClick={this.handleClick}
                        />
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default UserAddEdit;