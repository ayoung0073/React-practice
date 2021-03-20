import React, { useState, useEffect } from 'react'
import Nav from '../components/nav'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getBoard } from '../_actions/board_action'

function BoardDetailPage({match}) {

    const dispatch = useDispatch();

    const [Board, setBoard] = useState([])

    useEffect(() => {
        console.log(match.params); 
        dispatch(getBoard(match.params.bno))
        .then(response => {
            setBoard(response.payload);
            console.log(Board);
        })
    }, []);

    return (
        <div>
            <Nav />
            <div class="container">
            <button class="btn-secondary btn" onclick="history.back()">뒤로가기</button>
            <br/><br/>
                <div>
                    <i>No.<span id="id">{Board.bno}</span>
                    작성자. <span id="username">{Board.user}</span></i>
                </div>
                <br/>
                <div>
                    <h4>{Board.title}</h4>
                </div>
                <hr/>
                <div>
                    <div>{Board.content}</div>
                </div>
                <hr/>

            <div class="card">
                <form>
                    <input id="boardId" type="hidden" value="{{Board.id}}"/>
                    <div class="card-body"><textarea id="reply-content" class="form-control" rows="1"></textarea></div>
                    <div class="card-footer"><button id="btn-reply-save" class="btn-sm btn-primary">등록</button></div>
                </form>
            </div>
            <br/>
            <div class="card">
                <div class="card-header">댓글 리스트</div>
                    <ul id="reply-box" class="list-group">
                        { Board.reply}
                        <li id="reply-{{id}}" class="list-group-item d-flex justify-content-between">
                            <div>{Board.content}</div>
                            <div class="d-flex">
                                <div class="font-italic">작성자 {Board.user}&nbsp;</div> 
                                <button onclick="" class="badge">삭제</button>
                            </div>
                        </li>
                        {Board.reply}
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default withRouter(BoardDetailPage)