import React from 'react';
import axios from 'axios';

import Button from '../Button/Button';


class FormAddEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactInfo: {email: "", phone: "", soundcloud: "", bandcamp: "", facebook: "", website: ""},
            userName: "",
            type: "",
            healthSettings: true,
            about: "",
            firstName: "",
            lastName: "",
            postalCode: "",
            favouriteStudio: "",
            skills: [],
            instruments: [],
            lookingFor: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    E-mail:&nbsp;
                    <input
                        type="text"
                        name="email" // [Q] Or contactinfo-email? contactInfo.email?
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Phone:&nbsp;
                    <input
                        type="text"
                        name="phone"
                        autoComplete="off"
                        value={this.state.phone}
                        onChange={this.handleInputChange} // [Q] Can I add the existing validation here, too?
                    />
                </label>
                <label>
                    SoundCloud:&nbsp;
                    <input
                        type="text"
                        name="soundcloud"
                        value={this.state.soundcloud}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Bandcamp:&nbsp;
                    <input
                        type="text"
                        name="bandcamp"
                        value={this.state.bandcamp}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Facebook:&nbsp;
                    <input
                        type="text"
                        name="facebook"
                        value={this.state.facebook}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Website:&nbsp;
                    <input
                        type="text"
                        name="website"
                        value={this.state.website}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    User name:&nbsp;
                    <input
                        type="text"
                        name="userName" // [Q] How can I prevent users from using anything other than lowercase and underscore? Ties in with other question
                        value={this.state.userName}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Type:&nbsp;
                    <input
                        type="text"
                        name="type"
                        value={this.state.type}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Show health settings:&nbsp;
                    <input
                        type="text"
                        name="healthSettings"
                        value={this.state.healthSettings}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    About:&nbsp;
                    <input
                        type="text"
                        name="about"
                        value={this.state.about}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    First name:&nbsp;
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Last name:&nbsp;
                    <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Postal code:&nbsp;
                    <input
                        type="text"
                        name="postalCode"
                        value={this.state.postalCode}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Favourite studio:&nbsp;
                    <input
                        type="text"
                        name="favouriteStudio"
                        value={this.state.favouriteStudio}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Skills:&nbsp;
                    <input
                        type="text"
                        name="skills"
                        value={this.state.skills}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Instruments:&nbsp;
                    <input
                        type="text"
                        name="instruments"
                        value={this.state.instruments}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Looking for:&nbsp;
                    <input
                        type="text"
                        name="lookingFor"
                        value={this.state.lookingFor}
                        onChange={this.handleInputChange}
                    />
                </label>
                <Button
                    type="submit"
                    value="submit"
                    onClick={this.handleInputChange}
                />
            </form>
        );
    };
}

export default FormAddEdit;