// Utilities
import React, { useState }         from "react";
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

const SignInForm = () => {
    const initialState = {email: '', password: ''};
    const [state, setState] = useState(initialState);
    const handleSubmit = async event => {
        const {email, password} = state;
        // Destructure state
        event.preventDefault();
        // prevent Default form behaviour
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // Use auth utility from firebase
            // to sign in using email and password
            setState(initialState);
            //Reset state
        } catch (error) {
            alert(error);
        }
    };

     const handleChange = event => {
        const { value, name } = event.target;
        // Destructure the value of the target input + name
        setState(state => ({...state, [name]: value }));
        // User bracket notation to dynamically set the
    };

    return (
            <SignInFormContainer>
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>

                <SignInFormComponent onSubmit={handleSubmit}>
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
};

export default SignInForm;
