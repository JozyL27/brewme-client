import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './header'
import About from './components/about/about'


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App_header'>
        <Header />
        </header>
        <main className='App_main'>
          <Switch>
            <Route
            exact
            path={'/'}
            component={About}
            />
          </Switch>
        </main>
      </div>
    )
  }
}


export default App