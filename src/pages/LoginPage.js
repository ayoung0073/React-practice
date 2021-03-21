import React, { useState } from 'react'
import Nav from '../components/nav'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postLogin } from '../_actions/user_action';


function LoginPage(props) {
    const dispatch = useDispatch(); // dispatch 사용 (redux)

    // 이메일을 위한 state, 비밀번호를 위한 state 생성
    const [Email, setEmail] = useState("") // 초깃값 : 빈 string
    // useState 입력 -> 자동완성 
    const [Password, setPassword] = useState("") 

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value) // Email의 state을 변경
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 안하면 누를 때마다 refresh된다. 뒤에 해야할 일들을 할 수가 없음

        console.log('Email', Email)
        console.log('Password', Password)

        let body = {
            email: Email,
            password: Password
        }

        dispatch(postLogin(body)) // actions > user_action.js의 postLogin 호출
            .then(response => {
                if(response.payload.success){
                    props.history.push('/')
                }else{
                    alert('error')
                }
            })
    }

    return (
        <div>
            <Nav/>
            <div class="container">
                <form style={{display: 'flex', flexDirection: 'column'  }}
                    onSubmit={onSubmitHandler}
                >
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" value={Email} placeholder="Enter email" onChange={onEmailHandler} /> 
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" value={Password} class="form-control" placeholder="Enter password" onChange={onPasswordHandler} />
                    </div>

                    <button id="btn-login" class="btn btn-dark">login</button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(LoginPage)
