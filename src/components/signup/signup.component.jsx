import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

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

        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert('Passwords dont match!')
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (e) {
            console.error(e)
        }
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

export default SignUp