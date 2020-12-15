import React from 'react';
import axios from 'axios';

import Button from '../Button/Button';


class FormAddEdit extends React.Component {
    const [state, setState] = React.useState({
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
        lookingFor: ""
    })

    function handleChange (event) {
        const value = event.target.value;
        
        setState({
          ...state,
          [event.target.name]: value
        });
    };

    return (
        <form>
            <label>
                E-mail:&nbsp;
                <input
                    type="text"
                    name="email" // [Q] Or contactinfo-email? contactInfo.email?
                    value={state.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Phone:&nbsp;
                <input
                    type="text"
                    name="phone"
                    autoComplete="off"
                    value={state.phone}
                    onChange={handleChange} // [Q] Can I add the existing validation here, too?
                />
            </label>
            <label>
                SoundCloud:&nbsp;
                <input
                    type="text"
                    name="soundcloud"
                    value={state.soundcloud}
                    onChange={handleChange}
                />
            </label>
            <label>
                Bandcamp:&nbsp;
                <input
                    type="text"
                    name="bandcamp"
                    value={state.bandcamp}
                    onChange={handleChange}
                />
            </label>
            <label>
                Facebook:&nbsp;
                <input
                    type="text"
                    name="facebook"
                    value={state.facebook}
                    onChange={handleChange}
                />
            </label>
            <label>
                Website:&nbsp;
                <input
                    type="text"
                    name="website"
                    value={state.website}
                    onChange={handleChange}
                />
            </label>
            <label>
                User name:&nbsp;
                <input
                    type="text"
                    name="userName" // [Q] How can I prevent users from using anything other than lowercase and underscore? Ties in with other question
                    value={state.userName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Type:&nbsp;
                <input
                    type="text"
                    name="type"
                    value={state.type}
                    onChange={handleChange}
                />
            </label>
            <label>
                Show health settings:&nbsp;
                <input
                    type="text"
                    name="healthSettings"
                    value={state.healthSettings}
                    onChange={handleChange}
                />
            </label>
            <label>
                About:&nbsp;
                <input
                    type="text"
                    name="about"
                    value={state.about}
                    onChange={handleChange}
                />
            </label>
            <label>
                First name:&nbsp;
                <input
                    type="text"
                    name="firstName"
                    value={state.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Last name:&nbsp;
                <input
                    type="text"
                    name="lastName"
                    value={state.lastName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Postal code:&nbsp;
                <input
                    type="text"
                    name="postalCode"
                    value={state.postalCode}
                    onChange={handleChange}
                />
            </label>
            <label>
                Favourite studio:&nbsp;
                <input
                    type="text"
                    name="favouriteStudio"
                    value={state.favouriteStudio}
                    onChange={handleChange}
                />
            </label>
            <label>
                Skills:&nbsp;
                <input
                    type="text"
                    name="skills"
                    value={state.skills}
                    onChange={handleChange}
                />
            </label>
            <label>
                Instruments:&nbsp;
                <input
                    type="text"
                    name="instruments"
                    value={state.instruments}
                    onChange={handleChange}
                />
            </label>
            <label>
                Looking for:&nbsp;
                <input
                    type="text"
                    name="lookingFor"
                    value={state.lookingFor}
                    onChange={handleChange}
                />
            </label>
            <Button
                type="submit"
                value="submit"
                onClick={handleChange}
            />
        </form>
    );
};

export default FormAddEdit;