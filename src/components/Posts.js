import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editPost } from '../actions'
import EditForm from './EditForm'

const Post = ({ posts, dispatchEditPost }) => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')
    const [createMode, setCreateMode] = useState(false)
    
    return (
        <>
            <button onClick={() => {
                setCreateMode(true)
            }}>Add Post</button>
            {posts.map(post => 
                <div key={post.id}>
                    <EditForm post={post}/>
                </div>)}
            {createMode && (
                <div>
                    <input placeholder="Title" onChange={e => setTitle(e.target.value)}/>
                    <input placeholder="Image" onChange={e => setImage(e.target.value)}/>
                    <input placeholder="Description" onChange={e => setDesc(e.target.value)}/>
                    <button onClick={() => {
                        if (title && image && desc) {
                            setCreateMode(false)
                            dispatchEditPost({ title, image, desc })
                        }
                    }}>Save</button>
                    <button onClick={() => setCreateMode(false)}>Cancel</button>
                </div>
            )}
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchEditPost: input => dispatch(editPost(input))
})

const mapStateToProps = state => ({
    posts: state.post
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
