import React from 'react';
import axios from 'axios';

import Button from '../Button/Button';


class FormAddEdit extends React.Component {

    handleChange = (propertyName) => (event) => {
        const { user } = this.state;
        const newUser = {
            ...user,
            [propertyName]: event.target.value
        };
        this.setState({ user: newUser });
    }
    
    render() {
        return (
            <form>
                <label>
                    E-mail:&nbsp;
                    <input
                        type="text"
                        name="email" // [Q] Or contactinfo-email? contactInfo.email?
                        value={this.state.user.email}
                        onChange={this.handleChange('email')}
                    />
                </label>
                <label>
                    Phone:&nbsp;
                    <input
                        type="text"
                        name="phone"
                        autoComplete="off"
                        value={this.state.user.phone}
                        onChange={this.handleChange('phone')} // [Q] Can I add the existing validation here, too?
                    />
                </label>
                <label>
                    SoundCloud:&nbsp;
                    <input
                        type="text"
                        name="soundcloud"
                        value={this.state.user.soundcloud}
                        onChange={this.handleChange('soundcloud')}
                    />
                </label>
                <label>
                    Bandcamp:&nbsp;
                    <input
                        type="text"
                        name="bandcamp"
                        value={this.state.user.bandcamp}
                        onChange={this.handleChange('bandcamp')}
                    />
                </label>
                <label>
                    Facebook:&nbsp;
                    <input
                        type="text"
                        name="facebook"
                        value={this.state.user.facebook}
                        onChange={this.handleChange('facebook')}
                    />
                </label>
                <label>
                    Website:&nbsp;
                    <input
                        type="text"
                        name="website"
                        value={this.state.user.website}
                        onChange={this.handleChange('website')}
                    />
                </label>
                <label>
                    User name:&nbsp;
                    <input
                        type="text"
                        name="userName" // [Q] How can I prevent users from using anything other than lowercase and underscore? Ties in with other question
                        value={this.state.user.userName}
                        onChange={this.handleChange('userName')}
                    />
                </label>
                <label>
                    Type:&nbsp;
                    <input
                        type="text"
                        name="type"
                        value={this.state.user.type}
                        onChange={this.handleChange('type')}
                    />
                </label>
                <label>
                    Show health settings:&nbsp;
                    <input
                        type="checkbox"
                        name="healthSettings"
                        checked={this.state.user.healthSettings}
                        onChange={this.handleChange('healthSettings')}
                    />
                </label>
                <label>
                    About:&nbsp;
                    <input
                        type="text"
                        name="about"
                        value={this.state.user.about}
                        onChange={this.handleChange('about')}
                    />
                </label>
                <label>
                    First name:&nbsp;
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.user.firstName}
                        onChange={this.handleChange('firstName')}
                    />
                </label>
                <label>
                    Last name:&nbsp;
                    <input
                        type="text"
                        name="lastName"
                        value={this.state.user.lastName}
                        onChange={this.handleChange('lastName')}
                    />
                </label>
                <label>
                    Postal code:&nbsp;
                    <input
                        type="text"
                        name="postalCode"
                        value={this.state.user.postalCode}
                        onChange={this.handleChange('postalCode')}
                    />
                </label>
                <label>
                    Favourite studio:&nbsp;
                    <input
                        type="text"
                        name="favouriteStudio"
                        value={this.state.user.favouriteStudio}
                        onChange={this.handleChange('favouriteStudio')}
                    />
                </label>
                <label>
                    Skills:&nbsp;
                    <input
                        type="text"
                        name="skills"
                        value={this.state.user.skills}
                        onChange={this.handleChange('skills')}
                    />
                </label>
                <label>
                    Instruments:&nbsp;
                    <input
                        type="text"
                        name="instruments"
                        value={this.state.user.instruments}
                        onChange={this.handleChange('instruments')}
                    />
                </label>
                <label>
                    Looking for:&nbsp;
                    <input
                        type="text"
                        name="lookingFor"
                        value={this.state.user.lookingFor}
                        onChange={this.handleChange('lookingFor')}
                    />
                </label>
            </form>
        );
    };
}

export default FormAddEdit;

/*
                <Button
                    type="submit"
                    value="submit"
                    onClick={this.handleChange('')}
                />
*/