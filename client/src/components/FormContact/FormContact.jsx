import React from 'react';

class FormContact extends React.Component {
  state = {
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  updateEmail = event => {
    this.setState({
      email: event.target.value,
    });
  };

  updatePhone = event => {
    // custom format: (123) 456-7890

    const phoneVal = this.trimString(event.target.value);
    let formattedPhone = '';

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
  }

  updatePassword = event => {
    this.setState(
      {
        password: event.target.value,
      },
      () => {
        if (this.state.password.length < 8) {
          console.log("Weak password.");
        } else {
          console.log("Strong Password");
        }
      }
    );
  };

  updateConfirmPassword = event => {
    this.setState({
      confirmPassword: event.target.value,
    });
  };

  handleClick = () => {
    if (!this.state.password) {
      alert("Password can not be empty.");
      return;
    }

    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords don't match");
    } else {
      alert("Signed Up!");
    }
  };

  trimString = str => {
    return str
      .replace('(', '')
      .replace(')', '')
      .replace(' ', '')
      .replace('-', '')
      .substr(0, 10);
  }

  render() {
    return (
      <form>
        <h2>Form with State</h2>
        <div>
          Email:{" "}
          <input
            type="text"
            name="email"
            onChange={this.updateEmail}
            value={this.state.email}
          />
        </div>
        <div>
          Phone:{" "}
          <input
            type="text"
            name="phone"
            autoComplete="off"
            onChange={this.updatePhone}
            value={this.state.phone}
          />
        </div>
        <div>
          Password:{" "}
          <input
            type="password"
            name="password"
            onChange={this.updatePassword}
            value={this.state.password}
          />
        </div>
        <div>
          Confirm Password:{" "}
          <input
            type="password"
            name="confirmPassword"
            onChange={this.updateConfirmPassword}
            value={this.state.confirmPassword}
          />
        </div>
        <button type="button" onClick={this.handleClick}>
          Sign Up
        </button>
      </form>
    );
  }
}

export default FormContact;