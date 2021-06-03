import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';

import { createProjectAction } from '../../store/actions/projectActions';

const CreateProject = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const project = {title, content}

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
            e.preventDefault();
            // console.log({title: title, content: content});
            dispatch(createProjectAction(project));
            props.history.push('/');
    }

    const auth = useSelector(state => {
        return(state.firebase.auth);
    })

    if(!auth.uid) return <Redirect to='/signin' />
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Project Title</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" className="materialize-textarea" value={content} onChange={(e) => setContent(e.target.value)} ></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    );
}

export default CreateProject;
