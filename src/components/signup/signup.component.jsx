import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signUpStart } from '../../redux/user/user.actions'

import './signup.styles.scss'

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials

    const handleSubmit = async e => {
        e.preventDefault()



        if (password !== confirmPassword) {
            alert('Passwords dont match!')
            return
        }

        signUpStart({ displayName, email, password })
    }

    const handleChange = e => {
        const { name, value } = e.target

        setUserCredentials({ ...userCredentials, [name]: value })
    }


    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput name='displayName' type='text' value={displayName} onChange={handleChange} label='Display Name' required />
                <FormInput name='email' type='email' value={email} onChange={handleChange} label='Email' required />
                <FormInput name='password' type='password' value={password} onChange={handleChange} label='Password' required />
                <FormInput name='confirmPassword' type='password' value={confirmPassword} onChange={handleChange} label='Confirm Password' required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)