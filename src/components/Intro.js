import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editIntro } from '../actions'

const Intro = ({ state, dispatchEditIntro }) => {
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')
    const [showForm, setShowForm] = useState(false)

    return (
        <>
            <button onClick={() => setShowForm(true)}>Edit</button>
            {showForm && (
                <div>
                    <input placeholder={state.image} onChange={e => setImage(e.target.value)}/>
                    <input placeholder={state.desc} onChange={e => setDesc(e.target.value)}/>
                    <button onClick={() => {
                        if (image && desc) {
                            setShowForm(false)
                            dispatchEditIntro({image, desc})
                        }
                    }}>Save</button>
                    <button onClick={() => setShowForm(false)}>Cancel</button>
                </div>
            )}
            
            {!showForm && image && desc && (
                <div>
                    <img src={state.image}/>
                    <br/>
                    {state.desc}
                </div>
            )}
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchEditIntro: input => dispatch(editIntro(input))
})

const mapStateToProps = state => ({
    state: state.intro
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)