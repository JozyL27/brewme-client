import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/header'
import About from './components/about/about'
import NotFoundPage from './routes/NotFoundPage'
import NavBar from './components/NavBar/NavBar'
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute'
import PrivateRoute from './components/Utils/PrivateRoute'
import LoginPage from './routes/LoginPage'
import SearchBeer from './components/searchBeers/searchBeer'
import RandomBeer from './components/randomBeer/randomBeer'
import MyBeers from './components/MyBeers/MyBeers'
import Logo from './components/Logo/Logo'


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App_header'>
        <Header />
        </header>
        <Logo />
        <NavBar />
        <main className='App_main'>
          <Switch>
            <Route
            exact
            path={'/'}
            component={About}
            />
            <PrivateRoute
            path={'/search'}
            component={SearchBeer}
            />
            <PrivateRoute
            path={'/myBeers'}
            component={MyBeers}
            />
            <PrivateRoute
            path={'/random'}
            component={RandomBeer}
            />
            <PublicOnlyRoute 
              path={'/login'}
              component={LoginPage}
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