import React from "react";
import axios from 'axios';

import Button from '../Button/Button';

// [Q] Hate how I'm repeating myself here
class AddEditUser extends React.Component {
    updateEmail = event => {
        this.setState({
            users: {
                email: event.target.value
            }
        });
    };

    updateScreenName = event => {
        this.setState({
            users: {
                screenName: event.target.value
            }
        });
    };
    
    updateType = event => {
        this.setState({
            users: {
                type: event.target.value
            }
        });
    };
    
    updateHealthSettings = event => {
        this.setState({
            users: {
                healthSettings: event.target.value
            }
        });
    };
    
    updateAbout = event => {
        this.setState({
            users: {
                about: event.target.value
            }
        });
    };
    
    updateFirstName = event => {
        this.setState({
            users: {
                firstName: event.target.value
            }
        });
    };
    
    updateLastName = event => {
        this.setState({
            users: {
                lastName: event.target.value
            }
        });
    };
    
    updatePostalCode = event => {
        this.setState({
            users: {
                postalCode: event.target.value
            }
        });
    };
    
    updateFavouriteStudio = event => {
        this.setState({
            users: {
                favouriteStudio: event.target.value
            }
        });
    };
    
    updateSkills = event => {
        this.setState({
            users: {
                skills: event.target.value
            }
        });
    };
    
    updateInstruments = event => {
        this.setState({
            users: {
                instruments: event.target.value
            }
        });
    };
    
    updateLookingFor = event => {
        this.setState({
            users: {
                lookingFor: event.target.value
            }
        });
    };

    handleClick = async () => {
        if (this.props.match.path === "/user/:id/edit") {
            await axios
                .put(`http://localhost:5000/user/${this.state.users.id}`, this.state.users)
                .then(alert("User has been updated"))
            ;
        } else if (this.props.match.path === "/add-user") {
            await axios
                .post('http://localhost:5000/user/', this.state.users)
                .then(alert("User has been added"))
            ;
        }
    }

    componentDidMount = async () => {
        let users;
        if (this.props.match.params.id) {
            await axios
                .get(`http://localhost:5000/user/${this.props.match.params.id}`)
                .then((response) => {
                    this.setState({
                        users: response.data
                    });
                    console.log(this.state.users);
                })
            ;
        }
    }

    render() {
        return (
            <form className="add-edit">
                <section>
                    <label className="add-edit__label field-row-stacked">
                        E-mail:&nbsp;
                        <input
                            type="text"
                            name="email"
                            defaultValue={this.props.email}
                            onChange={this.updateEmail}
                        />
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        Postal code:&nbsp;
                        <input
                            type="text"
                            name="postalCode"
                            defaultValue={this.props.postalCode}
                            onChange={this.updatePostalCode}
                        />
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        Artist or band:&nbsp;
                        <select name="type" value={this.props.value} onChange={this.updateType}>
                            <option value="artist">Artist</option>
                            <option value="band">Band</option>
                        </select>
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        Screen name:&nbsp;
                        <input
                            type="text"
                            name="screenName"
                            defaultValue={this.props.screenName}
                            onChange={this.updateScreenName}
                        />
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        About:&nbsp;
                        <textarea
                            type="text"
                            name="about"
                            defaultValue={this.props.about}
                            onChange={this.updateAbout}
                        ></textarea>
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        First name:&nbsp;
                        <input
                            type="text"
                            name="firstName"
                            defaultValue={this.props.firstName}
                            onChange={this.updateFirstName}
                        />
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        Last name:&nbsp;
                        <input
                            type="text"
                            name="lastName"
                            defaultValue={this.props.lastName}
                            onChange={this.updateLastName}
                        />
                    </label>
                    {
                        this.props.type === "band"
                            ? <label className="add-edit__label field-row-stacked">
                                Looking for:&nbsp;
                                <input
                                    type="text"
                                    name="lookingFor"
                                    defaultValue={this.props.lookingFor}
                                    onChange={this.updateLookingFor}
                                />
                            </label>
                            : <label className="add-edit__label field-row-stacked">
                                Skills:&nbsp;
                                <input
                                    type="text"
                                    name="skills"
                                    defaultValue={this.props.skills}
                                    onChange={this.updateSkills}
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
                </section>
            </form>
        );
    }
}

export default AddEditUser;