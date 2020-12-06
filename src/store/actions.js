import {RECEIVE_USER} from './mutation-types'
import {reqLoginUser} from '../api'
export default {
  async loginUser({commit},loginUser){
    const res = await reqLoginUser(loginUser)
    if(res.code == 0){
      const user = res.data
      commit(RECEIVE_USER,{user})
    }else{
      console.log(res.msg)
    }

  }
}
