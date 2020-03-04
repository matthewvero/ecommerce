import React from 'react'
import './sign-in-page.styles.scss'
import SignInForm from '../../components/signinform/signinform.component'
import SignUpForm from '../../components/signupform/signupform.component'

export const SignInPage = () => {
    return (
        <div className='signinpage'>
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
        </div>
    )
}





