import React from 'react';
import axios from 'axios';

import Button from '../Button/Button';


class FormUserAddEdit extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            data: {
                contactInfo: {email: "", phone: "", soundcloud: "", bandcamp: "", facebook: "", website: ""},
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
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        axios
            .get(`http://localhost:5000/user/1`) // [Q] Params?
            .then((response) => {
                console.log(response);
                this.setState({
                    data: response.data
                });
            });
    }

    handleChange(event) {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        axios
            .post('http://localhost:5000/user/', this.state.data)
            .then(console.log('User has been added'))
    }

    render() {
        return (
            <form>
                <label className="form__input">
                    E-mail:&nbsp;
                    <input
                        type="text"
                        name="email"
                        defaultValue={this.state.data.contactInfo.email}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    Phone:&nbsp;
                    <input
                        type="text"
                        name="phone"
                        autoComplete="off"
                        defaultValue={this.state.data.contactInfo.phone}
                        onChange={this.handleChange} // [Q] Can I add the existing validation here, too?
                    />
                </label>
                <label className="form__input">
                    SoundCloud:&nbsp;
                    <input
                        type="text"
                        name="soundcloud"
                        defaultValue={this.state.data.contactInfo.soundcloud}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    Bandcamp:&nbsp;
                    <input
                        type="text"
                        name="bandcamp"
                        defaultValue={this.state.data.contactInfo.bandcamp}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    Facebook:&nbsp;
                    <input
                        type="text"
                        name="facebook"
                        defaultValue={this.state.data.contactInfo.facebook}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    Website:&nbsp;
                    <input
                        type="text"
                        name="website"
                        defaultValue={this.state.data.contactInfo.website}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    User name:&nbsp;
                    <input
                        type="text"
                        name="screenName" // [Q] How can I prevent users from using anything other than lowercase and underscore? Ties in with other question
                        defaultValue={this.state.data.screenName}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    Type:&nbsp;
                    <input
                        type="text"
                        name="type"
                        defaultValue={this.state.data.type}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    Show mental health settings:&nbsp;
                    <input
                        type="checkbox"
                        name="healthSettings"
                        value="1" // [Q] This only works once, so the user must make up their mind! (jk I mean to fix it)
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    About:&nbsp;
                    <input
                        type="text"
                        name="about"
                        defaultValue={this.state.data.about}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    First name:&nbsp;
                    <input
                        type="text"
                        name="firstName"
                        defaultValue={this.state.data.firstName}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    Last name:&nbsp;
                    <input
                        type="text"
                        name="lastName"
                        defaultValue={this.state.data.lastName}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    Postal code:&nbsp;
                    <input
                        type="text"
                        name="postalCode"
                        defaultValue={this.state.data.postalCode}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    Favourite studio:&nbsp;
                    <input
                        type="text"
                        name="favouriteStudio"
                        defaultValue={this.state.data.favouriteStudio}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    Skills:&nbsp;
                    <input
                        type="text"
                        name="skills"
                        defaultValue={this.state.data.skills}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    Instruments:&nbsp;
                    <input
                        type="text"
                        name="instruments"
                        defaultValue={this.state.data.instruments}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="form__input">
                    Looking for:&nbsp;
                    <input
                        type="text"
                        name="lookingFor"
                        defaultValue={this.state.data.lookingFor}
                        onChange={this.handleChange}
                    />
                </label>
                <Button
                    type="submit"
                    value="submit"
                    onClick={this.handleSubmit}
                />
                <Button
                    type="reset"
                    value="clear"
                />
            </form>
        );
    }
};

export default FormUserAddEdit;

/*


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
                        name="screenName" // [Q] How can I prevent users from using anything other than lowercase and underscore? Ties in with other question
                        value={this.state.user.screenName}
                        onChange={this.handleChange('screenName')}
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

import React from 'react';
import axios from 'axios';

import Button from '../Button/Button';


class FormUserAddEdit extends React.Component {
    const [state, setState] = React.useState({
        contactInfo: {email: "", phone: "", soundcloud: "", bandcamp: "", facebook: "", website: ""},
        screenName: "",
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
                    name="screenName" // [Q] How can I prevent users from using anything other than lowercase and underscore? Ties in with other question
                    value={state.screenName}
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

export default FormUserAddEdit;


                <Button
                    type="submit"
                    value="submit"
                    onClick={this.handleChange('')}
                />
*/


/*  THIS WORKS
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.handleChange = this.handleChange.bind(this);
    };
    
    handleChange(event) {
        this.setState({data: event.target.value});
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    defaultValue = {this.state.data}
                    onChange={this.handleChange}
                    />
                <h4>{this.state.data}</h4>
            </div>
        )
    }




import React from 'react';
import axios from 'axios';

import Button from '../Button/Button';


class FormUserAddEdit extends React.Component {
    const [state, setState] = React.useState({
        contactInfo: {email: "", phone: "", soundcloud: "", bandcamp: "", facebook: "", website: ""},
        screenName: "",
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
                    name="screenName" // [Q] How can I prevent users from using anything other than lowercase and underscore? Ties in with other question
                    value={state.screenName}
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
*/