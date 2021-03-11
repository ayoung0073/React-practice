import React, { Component, useState } from 'react'
import Nav from '../components/nav'
import $ from 'jquery';
import Editor from '../components/EditorComponent'
import {withRouter} from 'react-router-dom'


function BoardWritePage() {

    const [desc, setDesc] = useState('');
    function onEditorChange(value) {
        setDesc(value)
    }
    
    return (
        <div>
            <Nav />
            <div class="container">
            <form>
                <div class="form-group">
                    <label for="title">TITLE</label>
                    <input type="text" class="form-control" placeholder="Enter title" id="title"/>
                </div>

                <div>
                <Editor value={desc} onChange={onEditorChange} />
                </div>

            </form>
            <button id="btn-board-save" class="btn btn-dark">save</button>

        </div>
        </div>
    );
}

export default BoardWritePage