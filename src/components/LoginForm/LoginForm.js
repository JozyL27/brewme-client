import React from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import { Button, Input } from '../Utils/Utils'
import BeerContext from '../../context/beerContext'
import './loginForm.css'

export default class LoginForm extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    static contextType = BeerContext

    state = { error: null }

    componentDidMount() {
        this.context.clearLoading()
    }

    handleSubmitJwtAuth = event => {
        event.preventDefault()
        this.setState({ error: null })
        this.context.setLoading()
        const { user_name, password } = event.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
        .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.context.setAuth()
            this.props.onLoginSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    componentWillUnmount() {
        this.context.clearLoading()
    }

    render() {
        const { error } = this.state
        return (
            <>
            {this.context.isLoading && 
            this.state.error === null ? 
            <div className="loader"></div> : 
            <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
                <h2 className="loginHeader">LOGIN</h2>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <div className='user_name'>
                    <label htmlFor='user_name'>
                        User Name
                    </label>
                    <Input
                    required
                    name='user_name'
                    className="loginInput"
                    id='user_name'
                    defaultValue="Zelda"
                    >
                    </Input>
                </div>
                <div className='password'>
                    <label htmlFor='password' className="pwLabel">
                        Password
                    </label>
                    <Input
                    required
                    name='password'
                    type='password'
                    defaultValue="#Link1234"
                    className="loginInput pwInput"
                    id='password'>
                    </Input>
                </div>
                <Button type='submit' className="loginButton">
                    Login
                </Button>
            </form>
            }
            </>
        )
    }
}