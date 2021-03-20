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

export function getBoardList(){

    const request = axios.get('/api/board')
        .then(response => response.data)
    
    return {
        type: "get_board_list", // 없으면 ..?
        payload: request
    }
}

export function getBoard(n){
    console.log(n);
    const request = axios.get('/api/board/' + n)
        .then(response => response.data)

    console.log(request);
    
    return {
        type: "get_board", // 없으면 ..?
        payload: request
    }
}