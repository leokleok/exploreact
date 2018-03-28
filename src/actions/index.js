import { FETCH_USERS, GET_USERNAME } from '../constants'

export const getUserName = (user) => {
  return {
    type: GET_USERNAME,
    user
  }
}

export const fetchGitHubUsers = (payload) => {
  return {
    type: FETCH_USERS,
    payload
  }
}
