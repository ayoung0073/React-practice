import React from 'react';
import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.css'

const Nav = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote.js" defer></script>
            {/* <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.css" rel="stylesheet"/>
            <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.js"></script> */}
            
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <a class="navbar-brand" href="#">Logo</a>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                </ul>
            </div>
        </nav>
        <br/>
    </div>
    );
  };
export default Nav;
  
//   export default(props) => {
//     //api 구현 덜 됨 -> 수정 필요 
//     const point = 0;
//     const userId = localStorage.getItem('userId');
//     //const onLogout = useCallback(
//     //    (e) => {
//     //      dispatch(allAction.logOut());
//     //    },
//     //    [dispatch]
//     //);
//     return (
//         <HeaderPresenter 
//             main = {props.main}
//             login = {userId}
//             point = {point}
//         /> 
//     );
// };

// const Container = styled.nav`
//   background-color : ${props => props.theme.main_color}; 
//   ul {
//     display:flex;
//     align-items: center;  
//     height : 80px;
//     justify-content: center;
//     color: ${props => props.theme.white}; 
//     font-weight: bold;
//     font-size: 18px;
//     line-height: 26px;
//   }
//   ul li{
//     width: 400px;
//     display:flex;
//     align-items: center;  
//     height : 80px;
//     justify-content: center;
//   }
  
//   li:hover {
//     background-color : ${props => props.theme.white}; 
//     color :${props => props.theme.hover_color}; 
//     border-radius: 16px 16px 0px 0px;
//     border-bottom : solid 3px ${props => props.theme.hover_color}; 
//   }
//   li ul{
//     display:none;
//     position:absolute;
//     margin-top:100px;
//     z-index:200;
//   }
  
//   li:hover ul{
//     display:block;
//   }
// `;