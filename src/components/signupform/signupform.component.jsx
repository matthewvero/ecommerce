import React, { Component } from "react";
import "./signupform.styles.scss";
import { FormInput } from "../form-input/form-input.component";
// Custom form input, fuction can be changed
import CustomButton from "../button/button.component";
// Custom button, the function can be set dynamically
import { auth, createUserDocument } from "../../firebase/firebase.utils";
// Auth utility import and create new user utility
// so that we can save new users to our db

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmpassword: ""
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        // Prevents default form from doing anything
        const { displayName, email, password, confirmpassword } = this.state;
        // Destructure state
        if (password !== confirmpassword) {
            alert("Passwords don't match");
            return;
            // Check passwords match
        }

        try {
            let { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            // Use firebase auth utility to create user profile

            await createUserDocument(user, { displayName });
            // Pass user profile to this to save it to firestore db

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmpassword: ""
            });
            // reset state
        } catch (error) {
            console.log("error", error.message);
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
            <div className="signup">
                <h2>I don't have an account</h2>
                <p>Sign up with your email and password</p>
                <form className="signupform" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        handleChange={this.handleChange}
                        value={this.state.displayName}
                        label="Name"
                    />
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
                    <FormInput
                        name="confirmpassword"
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.confirmpassword}
                        label="ConfirmPassword"
                    />
                    <CustomButton type="submit">Submit</CustomButton>
                </form>
            </div>
        );
    }
}
