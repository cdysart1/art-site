import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, AboutMe, Landscapes, Figures, Cityscapes, Home,ContactMe} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {

  render () {
    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/aboutMe' component={AboutMe} />
            <Route path='/landscapes' component={Landscapes} />
            <Route path='/figures' component={Figures} />
            <Route path='/cityscapes' component={Cityscapes} />
            <Route path='/contactMe' component={ContactMe} />
          </Switch>
        </Main>
      </Router>
    )
  }
}


export default Routes;


