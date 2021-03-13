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
                <a href="/write" class="btn btn-secondary">글 쓰기</a>
                <br/><br/>
                {Boards.map(board => 
                <div class="card m-1">
                    <div class="card-body">
                        <h5 class="card-title">{board.title}</h5>
                        <a href="/board/{board.bno}" class="btn btn-dark">상세 보기</a>
                    </div>
                </div>
                )}

            </div>
        </div>
    );
}

export default withRouter(MainPage)
// export default MainPage