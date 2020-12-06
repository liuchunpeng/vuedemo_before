import {RECEIVE_USER} from './mutation-types'
import {reqLoginUser} from '../api'
export default {
  async loginUser({commit},loginUser){
    const user = await reqLoginUser(loginUser)
    commit(RECEIVE_USER,{user})
  }
}
