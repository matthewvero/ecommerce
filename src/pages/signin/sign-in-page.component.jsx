// Utilities
import React from 'react'

// Components
import {SignInPageContainer} from './sign-in-page.styles'
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
            <SignInPageContainer>
                <SignInForm></SignInForm>
                <SignUpForm></SignUpForm>
            </SignInPageContainer>
        </CSSTransitionGroup>
    )
}





