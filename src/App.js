import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/header'
import About from './components/about/about'
import NotFoundPage from './routes/NotFoundPage'
import NavBar from './components/NavBar/NavBar'
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute'
import LoginPage from './routes/LoginPage'
import SearchBeer from './components/searchBeers/searchBeer'
import RandomBeer from './components/randomBeer/randomBeer'
import MyBeers from './components/MyBeers/MyBeers'


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
            exact
            path={'/search'}
            component={SearchBeer}
            />
            <Route
            exact
            path={'/myBeers'}
            component={MyBeers}
            />
            <Route
            exact
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