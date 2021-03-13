import React, { useState } from 'react'
import Nav from '../components/nav'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getBoardList } from '../_actions/board_action'

function MainPage(props) {

    const dispatch = useDispatch();

    const [Boards, setBoards] = useState([])
    let boards = [];


    // useEffect(()=>{
    //     // dispatch(allAction.loadSurvey());

    // },[]);

    dispatch(getBoardList())
    .then(response => {
        setBoards(response.payload)
        console.log(Boards)
    })

    return (
        <div>
            <Nav />
            <div class="container">
                <a href="/write">글 쓰기</a>
                <h3>글 목록</h3>
                <table border="1">
                    <tr>
                        <th>NO.</th>
                        <th>제목</th>
                    </tr>
                    {Boards.map(board => <tr><td>{board.seq}</td><td>{board.title}</td></tr>)}
                </table>
            </div>
        </div>
    );
}

export default withRouter(MainPage)
// export default MainPage