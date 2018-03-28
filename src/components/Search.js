import React, { Component } from 'react'
import {connect} from 'react-redux'

import { getUserName } from '../actions'
import { API_CALL_REQUEST } from '../constants'

class Search extends Component {

  handleInputChange = event => {
    this.props.dispatch(getUserName(event.target.value))
  }

  onSubmit = () => {
    this.props.dispatch({type: API_CALL_REQUEST})
  }

  render () {

    return (
      <div>
        <input
          value={this.props.state.search.name || ''}
          onChange={this.handleInputChange}
          placeholder='Search Github User'
          type='text' />
        <button type='submit' onClick={this.onSubmit}>Search Users</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({state: state})

export default connect(mapStateToProps)(Search)
