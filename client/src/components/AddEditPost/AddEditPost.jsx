import React from "react";
import axios from 'axios';

import Button from '../Button/Button';

class AddEditPost extends React.Component {
    loggedUser = 1; // [TBC]

    updateContent = event => {
        this.setState({
            posts: {
                author: this.loggedUser,
                content: event.target.value
            }
        });
    };

    handleClick = async () => {
        /*if (this.props.match.path === "/posts/:id/edit") {
            await axios
                .put(`http://localhost:5000/posts/${this.props.id}`, this.props)
                .then(alert("Post has been updated"))
            ;
        } else {*/
            await axios
                .post('http://localhost:5000/posts/', this.state.posts) // kinda jumpy
                //.then(alert("Post has been added"))
            ;
        //}
    }

    /*componentDidMount() {
        if (this.props.match.params.id) {
            axios
                .get(`http://localhost:5000/posts/${this.props.match.params.id}`)
                .then((response) => {
                    this.setState(response.data);
                })
            ;
        }
    }*/

    render() {
        return (
            <form className="add-edit">
                <section className="add-edit__speak-up">
                    <label className="add-edit__label add-edit__label--post field-row-stacked">
                        Speak up&nbsp;
                        <textarea
                            className="add-edit__post-content"
                            type="text"
                            name="about"
                            defaultValue={this.props.content}
                            onChange={this.updateContent}
                        ></textarea>
                    </label>
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

export default AddEditPost;