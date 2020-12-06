
import {RECEIVE_USER} from './mutation-types'

export default {
  [RECEIVE_USER] (state,{user}){
    console.log(user)
    console.log(state.user)
    state.user = user
  }
}
