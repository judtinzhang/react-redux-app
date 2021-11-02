import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editIntro } from '../actions'

const Intro = ({ intro, dispatchEditIntro }) => {
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')
    const [editMode, setEditMode] = useState(false)
    const [madeEdit, setMadeEdit] = useState(false)

    return (
        <>
            <button onClick={() => setEditMode(true)}>Edit</button>
            {editMode && (
                <div>
                    <input placeholder={intro.image} onChange={e => setImage(e.target.value)}/>
                    <input placeholder={intro.desc} onChange={e => setDesc(e.target.value)}/>
                    <button onClick={() => {
                        if (image && desc) {
                            setEditMode(false)
                            setMadeEdit(true)
                            dispatchEditIntro({image, desc})
                        }
                    }}>Save</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </div>
            )}
            
            {!editMode && madeEdit && (
                <div>
                    <img src={intro.image}/>
                    <br/>
                    {intro.desc}
                </div>
            )}
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchEditIntro: input => dispatch(editIntro(input))
})

const mapStateToProps = state => ({
    intro: state.intro
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)