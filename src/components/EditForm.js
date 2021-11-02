import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editPost, MODIFY_POST, DELETE_POST } from '../actions'

const EditForm = ({post, dispatchEditPost}) => {
    const [newTitle, setNewTitle] = useState('')
    const [newImage, setNewImage] = useState('')
    const [newDesc, setNewDesc] = useState('')
    
    const [isEdit, setIsEdit] = useState(false)
    const {id, title, image, desc} = post

    return (
        <>
            {!isEdit && (
                <div>
                    <div>
                        Title: {title} 
                        Image: <img src={image}/>
                        Description: {desc} 
                    </div>
                    <button onClick={() => setIsEdit(true)}>Edit</button>
                </div>

            )}
            {isEdit && (
                <div>
                    Title
                    <input placeholder={title} onChange={e => setNewTitle(e.target.value)}/>
                    <br/>
                    Image
                    <input placeholder={image} onChange={e => setNewImage(e.target.value)}/>
                    <br/>
                    Description
                    <input placeholder={desc} onChange={e => setNewDesc(e.target.value)}/>
                    <button onClick={() => {
                        const n_title = newTitle !== '' ? newTitle : title
                        const n_image = newImage !== '' ? newImage : image
                        const n_desc = newDesc !== '' ? newDesc : desc
                        dispatchEditPost({type: MODIFY_POST, n_id: id, title: n_title, image: n_image, desc: n_desc})
                        setIsEdit(false)
                    }}>Save</button>
                    <button onClick={() => setIsEdit(false)}>Cancel</button>
                    <button onClick={() => { 
                        dispatchEditPost({type: DELETE_POST, n_id: id, title, image, desc})
                        setIsEdit(false)
                    }}>Delete Post</button>
                </div>
            )}
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchEditPost: input => dispatch(editPost(input))
})

export default connect(null, mapDispatchToProps)(EditForm)