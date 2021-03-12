import axios from 'axios'

export function postBoard(dataTosubmit){
    const request = axios.post('/api/board', dataTosubmit, {
        headers: { "Content-Type": `application/json`}
    })
        .then(response => response.data)
    console.log(request);

    return { // 다음 state
        type: "post_board",
        payload: request // reducer로 전달하자.
    }
}

// export function registerUser(dataTosubmit){
//     const request = axios.post('/api/register', dataTosubmit)
//         .then(response => response.data)
    
//     return {
//         type: REGISTER_USER,
//         payload: request
//     }
// }

// export function auth(){

//     const request = axios.get('/api/auth')
//         .then(response => response.data)
    
//     return {
//         type: AUTH_USER,
//         payload: request
//     }
// }