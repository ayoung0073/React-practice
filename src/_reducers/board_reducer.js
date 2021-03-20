// import {
//     LOGIN_USER, REGISTER_USER, AUTH_USER
// } from '../_actions/types'

export default function (state={}, action) {
    return {...state, success: action.payload} // ...state: state을 똑같이 가져옴
    // 다음 state return
}