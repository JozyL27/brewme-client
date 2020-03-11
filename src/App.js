import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './header'
import About from './components/about/about'
import NotFoundPage from './routes/NotFoundPage'
import NavBar from './components/NavBar/NavBar'


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App_header'>
        <Header />
        </header>
        <NavBar />
        <main className='App_main'>
          <Switch>
            <Route
            exact
            path={'/'}
            component={About}
            />
            <Route
            component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}


export default App