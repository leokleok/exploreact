import { takeLatest, call, select } from 'redux-saga/effects'
import axios from 'axios'
import { API_CALL_REQUEST } from './constants'
import { user } from './selectors'

export default function * watcherSaga () {
  yield takeLatest(API_CALL_REQUEST, searchGitHubUser)
}

const fetchGitHubUserAPI = (user) => {
  return axios.get(`https://api.github.com/users/${user}/repos`)
}

export function * searchGitHubUser () {
  try {
    const getUser = yield select(user)
    const response = yield call(fetchGitHubUserAPI, getUser)
    console.log('response', response)
  } catch (error) {
    console.log(error)
  }
}
