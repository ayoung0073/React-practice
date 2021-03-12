import React, { useState } from 'react'
import Nav from '../components/nav'
import Editor from '../components/EditorComponent'
import {withRouter} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {postBoard} from '../_actions/board_action'


function BoardWritePage(props) {

    const [desc, setDesc] = useState('');
    function onEditorChange(value) {
        setDesc(value)
    }

    const dispatch = useDispatch(); // dispatch 사용 (redux)

    // title, content를 위한 state 생성
    // useState 입력 -> 자동완성 
    const [Title, setTitle] = useState("") // 초깃값 : 빈 string
    const [Content, setContent] = useState("") 

    const onTitleHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const onContentHandler = (event) => {
        setContent(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 안하면 누를 때마다 refresh된다. 뒤에 해야할 일들을 할 수가 없다.

        let body = {
            title: Title,
            content: Content
        }
        console.log(body)

        dispatch(postBoard(body)) // actions > user_action.js의 loginUser 호출
            .then(response => {
                console.log(response.payload)
                if(response.payload){
                    props.history.push('/')
                }else{
                    alert('error')
                }
            })
    }
    
    return (
        <div>
            <Nav />
            <div class="container">
            <form onSubmit={onSubmitHandler}>
                <div class="form-group">
                    <label for="title">제목</label>
                    <input type="text" class="form-control" value={Title} placeholder="Enter title" id="title" onChange={onTitleHandler}/>
                </div>

                <div>
                    <Editor value={Content} onChange={onContentHandler} />
                </div>
            <button class="btn btn-dark">save</button>
            </form>

        </div>
        </div>
    );
}

// export default BoardWritePage
export default withRouter(BoardWritePage)