// Utilities
import React, { Component }         from "react";
import { signInWithGoogle, auth }   from "../../firebase/firebase.utils";
// Allows us to use auth utilities to sign in with google

// Components
import CustomButton                 from "../button/button.component";
//Custom button component, function can be changed to suit needs
import {
    SignInFormContainer,
    SignInFormComponent,
    SignInFormButtonContainer
    

}        from './signinform.styles'
import { FormInput }                from "../form-input/form-input.component";
// Custom form input, fuction can be changed

export default class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = async event => {
        const { email, password } = this.state;
        // Destructure state
        event.preventDefault();
        // prevent Default form behaviour
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // Use auth utility from firebase
            // to sign in using email and password
            this.setState({ email: "", password: "" });
            //Reset state
        } catch (error) {
            alert(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        // Destructure the value of the target input + name
        this.setState({ [name]: value });
        // User bracket notation to dynamically set the
    };

    render() {
        return (
            <SignInFormContainer>
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>

                <SignInFormComponent onSubmit={this.handleSubmit}>
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
                    <SignInFormButtonContainer>
                        <CustomButton type="submit" >SIGN IN</CustomButton>
                        <CustomButton
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </SignInFormButtonContainer>
                </SignInFormComponent>
            </SignInFormContainer>
        );
    }
}
