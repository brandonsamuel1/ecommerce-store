import React, { Component } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { googleSignInStart } from '../../redux/user/user.actions'

import './signin.styles.scss'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (e) {
            console.log(e)
        }
    }

    handleChange = e => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Signin with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email' required />
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn)