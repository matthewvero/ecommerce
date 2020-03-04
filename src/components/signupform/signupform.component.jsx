import React, { Component } from 'react'
import './signupform.styles.scss'
import { FormInput } from '../form-input/form-input.component'
import { CustomButton } from '../button/button.component'
export default class SignUpForm extends Component {
    constructor (props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({email: '', password: ''})
        if (this.state.password === this.state.confirmpassword) {
            console.log('signed up')
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
                <form className='signupform'>
                    <FormInput 
                        name='name' 
                        type='text' 
                        handleChange={this.handleChange} 
                        value={this.state.name}
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
