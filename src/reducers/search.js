import { GET_USERNAME, API_CALL_REQUEST } from '../constants'

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USERNAME:
      return Object.assign({}, state, {name: action.user})
    case API_CALL_REQUEST:
      return {...state}
    default:
      return state
  }
}
