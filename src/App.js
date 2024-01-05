import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'

import About from './components/About'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
)

export default App
