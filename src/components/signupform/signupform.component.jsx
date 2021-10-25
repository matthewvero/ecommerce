// Utilities
import React, { useState }         from "react";
import { auth, createUserDocument } from "../../firebase/firebase.utils";
// Auth utility import and create new user utility
// so that we can save new users to our db

// Components
import CustomButton                 from "../button/button.component";
// Custom button, the function can be set dynamically
import { SignupFormContainer }      from './signupform.styles'
import { FormInput }                from "../form-input/form-input.component";
// Custom form input, fuction can be changed

const SignUpForm = () => {
    const initialState = {email: '',  password: '', confirmpassword: '', displayName: ''}
    const [state, setState] = useState(initialState);

    const handleSubmit = async event => {
        const {email, password, confirmpassword, displayName} = state;
        event.preventDefault();
        // Prevents default form from doing anything
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

            setState(initialState);
            // reset state
        } catch (error) {
            console.log("error", error.message);
        }
    };
    const handleChange = event => {
        const { value, name } = event.target;
        // Destructure the value of the target input + name
        setState(state => ({...state, [name]: value }));
        // User bracket notation to dynamically set the
    };

    return (
            <SignupFormContainer>
                <h2>I don't have an account</h2>
                <p>Sign up with your email and password</p>
                <form className="signupform" onSubmit={handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        handleChange={handleChange}
                        value={state.displayName}
                        label="Name"
                    />
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={handleChange}
                        value={state.email}
                        label="Email"
                    />
                    <FormInput
                        name="password"
                        type="password"
                        handleChange={handleChange}
                        value={state.password}
                        label="Password"
                    />
                    <FormInput
                        name="confirmpassword"
                        type="password"
                        handleChange={handleChange}
                        value={state.confirmpassword}
                        label="ConfirmPassword"
                    />
                    <CustomButton type="submit">Submit</CustomButton>
                </form>
            </SignupFormContainer>
        );
};

export default SignUpForm;
