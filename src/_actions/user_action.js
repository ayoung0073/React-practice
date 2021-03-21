import axios from 'axios'

export function postLogin(dataTosubmit){
    const request = axios.post('/api/login', dataTosubmit, {
        headers: { "Content-Type": `application/json`}
    })
        .then(response => response.data)
    console.log(request);

    return { // 다음 state
        type: "post_login",
        payload: request // reducer로 전달하자.
    }
}