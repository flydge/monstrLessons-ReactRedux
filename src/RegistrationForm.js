import React, { Component } from 'react';


class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){

    }

    handleEmailChange() {
        console.log('email chgd:', this);
       // this.setState({ })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           placeholder={'Email'}
                           value={this.state.email}
                           onChange={this.handleEmailChange}
                    />
                </form>
            </div>
        );
    }
}

export default RegistrationForm;
