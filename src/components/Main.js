import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Main extends Component {
  render () {
    return (
      <div className='Main'>
        <h1>
          <Link to='/'>Reduxstagram</Link>
        </h1>
          {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
Main.propTypes = {
  children: React.PropTypes.element
}
