import React from 'react'
import './sign-in-page.styles.scss'
import SignInForm from '../../components/signinform/signinform.component'
import SignUpForm from '../../components/signupform/signupform.component'
import {CSSTransitionGroup} from 'react-transition-group'
export const SignInPage = () => {
    return (
        <CSSTransitionGroup
                transitionName="signin"
                transitionAppear={true}
                transitionAppearTimeout={200}
                transitionEnter={false}
                transitionLeave={true}
                transitionLeaveTimeout={100}
        >
            <div className='signinpage'>
                <SignInForm></SignInForm>
                <SignUpForm></SignUpForm>
            </div>
        </CSSTransitionGroup>
    )
}





