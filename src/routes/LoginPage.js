import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import './loginPage.css'



export default class LoginPage extends React.Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
    }
    
    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }

    render() {
        return (
            <section className='LoginPage'>
                <LoginForm 
                  onLoginSuccess={this.handleLoginSuccess}
                />
            </section>
        )
    }
}