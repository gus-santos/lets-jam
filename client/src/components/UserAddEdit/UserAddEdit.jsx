import React from "react";
import axios from 'axios';

import Button from '../Button/Button';

class UserAddEdit extends React.Component {
    state = {
        contactInfo: {email: "",
        phone: "",
        soundcloud: "",
        bandcamp: "",
        facebook: "",
        website: ""},
        screenName: "",
        type: "",
        healthSettings: 0,
        about: "",
        firstName: "",
        lastName: "",
        postalCode: "",
        favouriteStudio: "",
        skills: {},
        instruments: [],
        lookingFor: ""
    };

    updateEmail = event => {
        this.setState({
            email: event.target.value
        });
    };
    
    updatePhone = event => {
        // custom format: (123) 456-7890

        const phoneVal = this.trimString(event.target.value);
        let formattedPhone = "";

        for (let i = 0; i < phoneVal.length; i++) {
            if (isNaN(phoneVal[i])) {
                continue;
            }

            if (i === 0) {
                formattedPhone += '(';
            }

            formattedPhone += phoneVal[i];

            if (i === 2) {
                formattedPhone += ') ';
            }

            if (i === 5) {
                formattedPhone += '-';
            }
        }

        this.setState({
            phone: formattedPhone
        });
    };
    
    updateSoundcloud = event => {
        this.setState({
            soundcloud: event.target.value
        });
    };
    
    updateBandcamp = event => {
        this.setState({
            bandcamp: event.target.value
        });
    };
    
    updateFacebook = event => {
        this.setState({
            facebook: event.target.value
        });
    };
    
    updateWebsite= event => {
        this.setState({
            website: event.target.value
        });
    };
    
    updateUserName = event => {
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
        console.log("State after submission is",this.state);
        axios
            .post('http://localhost:5000/user/', this.state)
            .then(console.log('User has been added'));
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
                let data = response.data;
                data.contactInfo = JSON.parse(data.contactInfo);
                data.skills = JSON.parse(data.skills);
                this.setState(response.data);
                console.log(this.state);
            });
    }

    render() {
        return (
            <form className="user-add-edit">
                <fieldset>
                    <label className="user-add-edit__label field-row-stacked">
                        User name:&nbsp;
                        <input
                            type="text"
                            name="screenName" // [Q] How can I prevent users from using anything other than lowercase and underscore? Ties in with other question
                            defaultValue={this.state.screenName}
                            onChange={this.updateUserName}
                        />
                    </label>
                    <label className="user-add-edit__label field-row-stacked">
                        About:&nbsp;
                        <textarea
                            type="text"
                            name="about"
                            defaultValue={this.state.about}
                            onChange={this.updateAbout}
                        ></textarea>
                    </label>
                    <label className="user-add-edit__label field-row-stacked">
                        First name:&nbsp;
                        <input
                            type="text"
                            name="firstName"
                            defaultValue={this.state.firstName}
                            onChange={this.updateFirstName}
                        />
                    </label>
                    <label className="user-add-edit__label field-row-stacked">
                        Last name:&nbsp;
                        <input
                            type="text"
                            name="lastName"
                            defaultValue={this.state.lastName}
                            onChange={this.updateLastName}
                        />
                    </label>
                    <label className="user-add-edit__label field-row-stacked">
                        Postal code:&nbsp;
                        <input
                            type="text"
                            name="postalCode"
                            defaultValue={this.state.postalCode}
                            onChange={this.updatePostalCode}
                        />
                    </label>
                    <label className="user-add-edit__label field-row-stacked">
                        Skills:&nbsp;
                        <input
                            type="text"
                            name="skills"
                            defaultValue={this.state.skills ? this.state.skills : ""}
                            onChange={this.updateSkills}
                        />
                    </label>
                    <label className="user-add-edit__label field-row-stacked">
                        Looking for:&nbsp;
                        <input
                            type="text"
                            name="lookingFor"
                            defaultValue={this.state.lookingFor}
                            onChange={this.updateLookingFor}
                        />
                    </label>
                    <div className="user-add-edit__button-wrapper">
                        <Button
                            type="submit"
                            label="Submit"
                            onClick={this.handleClick}
                        />
                        <Button
                            type="reset"
                            label="Clear"
                        />
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default UserAddEdit;