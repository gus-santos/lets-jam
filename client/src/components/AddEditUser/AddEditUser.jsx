import React, { Component } from "react";
import axios from "axios";
import Button from "../Button/Button";

class AddEditUser extends Component {
    constructor() {
        super();
        this.state = {};

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitForm = async () => {
        if (this.props.match.path === "/user/:id/edit") {
            await axios
                .put(`http://localhost:5000/user/${this.state.id}`, this.state)
                .then(alert("User has been updated"))
            ;
        } else if (this.props.match.path === "/add-user") {
            await axios
                .post('http://localhost:5000/user/', this.state)
                .then(alert("User has been added"))
            ;
        }
    }

    componentDidMount = async () => {
        if (this.props.match.params.id) {
            await axios
                .get(`http://localhost:5000/user/${this.props.match.params.id}`)
                .then((response) => {
                    this.setState(response.data);
                })
            ;
        }
    }

    render() {
        console.log(this.props);
        return (
            <form className="add-edit">
                <section>
                    <label className="add-edit__label field-row-stacked">
                        E-mail:&nbsp;
                        <input
                            type="email"
                            name="email"
                            defaultValue={this.state.email}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        Postal code:&nbsp;
                        <input
                            type="text"
                            name="postalCode"
                            defaultValue={this.state.postalCode}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        Artist or band:&nbsp;
                        <select name="type" value={this.state.type} onChange={this.onInputChange}>
                            <option value="artist">Artist</option>
                            <option value="band">Band</option>
                        </select>
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        Screen name:&nbsp;
                        <input
                            type="text"
                            name="screenName"
                            defaultValue={this.state.screenName}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        About:&nbsp;
                        <textarea
                            type="text"
                            name="about"
                            defaultValue={this.state.about}
                            onChange={this.onInputChange}
                        ></textarea>
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        First name:&nbsp;
                        <input
                            type="text"
                            name="firstName"
                            defaultValue={this.state.firstName}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <label className="add-edit__label field-row-stacked">
                        Last name:&nbsp;
                        <input
                            type="text"
                            name="lastName"
                            defaultValue={this.state.lastName}
                            onChange={this.onInputChange}
                        />
                    </label>
                    {
                        this.state.type === "band"
                            ? <label className="add-edit__label field-row-stacked">
                                Looking for:&nbsp;
                                <input
                                    type="text"
                                    name="lookingFor"
                                    defaultValue={this.state.lookingFor}
                                    onChange={this.onInputChange}
                                />
                            </label>
                            : <label className="add-edit__label field-row-stacked">
                                Skills:&nbsp;
                                <input
                                    type="text"
                                    name="skills"
                                    defaultValue={this.state.skills}
                                    onChange={this.onInputChange}
                                />
                            </label>
                    }
                    <div className="add-edit__button-wrapper">
                        <Button
                            type="submit"
                            label="Submit"
                            onClick={this.onSubmitForm}
                        />
                    </div>
                </section>
            </form>
        )
    }
}

export default AddEditUser;