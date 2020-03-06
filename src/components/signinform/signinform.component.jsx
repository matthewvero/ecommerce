import React, { Component } from "react";
import "./signinform.styles.scss";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../button/button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

export default class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: "", password: "" });
        console.log("this.state", this.state);
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="signin">
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>

                <form className="signinform" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="Email"
                    />
                    <FormInput
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label="Password"
                    />
                    <div className="signinbuttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton
                            onClick={signInWithGoogle}
                            isGoogleSignIn={true}
                        >
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
