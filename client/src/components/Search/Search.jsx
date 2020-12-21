import React from "react";

import Button from '../Button/Button';

class Search extends React.Component {
    state = {};

    loggedUser = 1; // [TBC]

    render() {
        return (
            <div>
                <form className="add-edit">
                    <article>
                        <label className="add-edit__label add-edit__label--horizontal">
                            <input
                                type="text"
                                name="skills"
                                placeholder="What are you looking for?"
                                onChange={this.handleClick}
                            />
                        </label>
                        <div className="add-edit__button-wrapper">
                            <Button
                                type="submit"
                                label="Search"
                                onClick={this.handleClick}
                            />
                        </div>
                    </article>
                </form>
            </div>
        );
    }
}

export default Search;