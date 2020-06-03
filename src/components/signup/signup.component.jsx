import React, { Component } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signUpStart } from '../../redux/user/user.actions'

import './signup.styles.scss'

class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { signUpStart } = this.props
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert('Passwords dont match!')
            return
        }

        signUpStart({ displayName, email, password })
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }


    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name='displayName' type='text' value={displayName} onChange={this.handleChange} label='Display Name' required />
                    <FormInput name='email' type='email' value={email} onChange={this.handleChange} label='Email' required />
                    <FormInput name='password' type='password' value={password} onChange={this.handleChange} label='Password' required />
                    <FormInput name='confirmPassword' type='password' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)