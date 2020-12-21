/* [TBC] Get rid of magic number in loggedUser
*/

import React from "react";
import axios from "axios";

import UserProfileDiv from "../UserProfileDiv/UserProfileDiv";

class UserProfile extends React.Component {
    state = {};
    
    componentDidMount() {
        let loggedUser = 1; // [TBC]
        if(this.props.match.params.id){
            loggedUser = this.props.match.params.id
        };

        axios
            .get(`http://localhost:5000/user/${loggedUser}`)
            .then((response) => {
                this.setState(response.data);
            });
    }

    render() {
        return (
            <UserProfileDiv {...this.state} />
        );
    }
}

export default UserProfile;