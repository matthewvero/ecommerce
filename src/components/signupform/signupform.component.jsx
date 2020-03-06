import React, { Component } from 'react'
import './signupform.styles.scss'
import { FormInput } from '../form-input/form-input.component'
import { CustomButton } from '../button/button.component'
import { auth, createUserDocument } from '../../firebase/firebase.utils'

export default class SignUpForm extends Component {
    constructor (props){
        super(props)
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {displayName, email, password, confirmpassword} = this.state
        if (password !== confirmpassword) {
            alert("Passwords don't match")
            return; 
        } 

        try {
            let {user} = await auth.createUserWithEmailAndPassword(email, password)
            
            await createUserDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmpassword: ''
            })
        } catch (error) {
            console.log('error', error.message)
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value })
        
    }

    render() {
        return (
            <div className='signup'>
                <h2>I don't have an account</h2>
                <p>Sign up with your email and password</p>
                <form className='signupform' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName' 
                        type='text' 
                        handleChange={this.handleChange} 
                        value={this.state.displayName}
                        label='Name'
                    />
                    <FormInput 
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange} 
                        value={this.state.email}
                        label='Email'
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        handleChange={this.handleChange} 
                        value={this.state.password}
                        label='Password'
                    />  
                    <FormInput 
                        name='confirmpassword' 
                        type='password' 
                        handleChange={this.handleChange} 
                        value={this.state.confirmpassword}
                        label='ConfirmPassword'
                    />  
                    <CustomButton type='submit' >Submit</CustomButton>
                </form>
            </div>
        )
    }
}
