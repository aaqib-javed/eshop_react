import React from 'react'
import { withRouter } from 'react-router-dom'
import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils' 

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        document.querySelector(".errorStatus").style.display = 'none';
        document.querySelector("button[type='submit']").innerHTML = 'Logging...';

        const { email, password } = this.state;

        try {
            const loginTrue = await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
            // if(loginTrue) {
            //     setTimeout(() => {
            //         this.props.history.push('/');
            //     }, 500);
            // }
            document.querySelector("button[type='submit']").innerHTML = 'Redirecting you...';
        } catch (error) {
            if (error) {
                document.querySelector(".errorStatus").style.display = 'block';
                document.querySelector("button[type='submit']").innerHTML = 'SIGN IN';
            }
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <small className="errorStatus" style={{ display: 'none' }}>Error in Logging, Try Again!</small>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" required />
                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
    
}

export default withRouter(SignIn)
