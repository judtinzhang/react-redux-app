import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editIntro } from '../actions'

const Intro = ({ intro, dispatchEditIntro }) => {
  const [image, setImage] = useState('')
  const [desc, setDesc] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [madeEdit, setMadeEdit] = useState(false)

  return (
    <div className="panel panel-default">
      <div className="panel-body">
        <button type="submit" className="btn btn-primary" onClick={() => setEditMode(true)}>Edit</button>
        {editMode && (
          <div>
            <input placeholder={intro.image} onChange={e => setImage(e.target.value)} />
            <input placeholder={intro.desc} onChange={e => setDesc(e.target.value)} />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                if (image && desc) {
                  setEditMode(false)
                  setMadeEdit(true)
                  dispatchEditIntro({ image, desc })
                }
              }}
            >
              Save
            </button>
            <button type="submit" className="btn btn-primary" onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        )}
        {!editMode && madeEdit && (
          <div>
            <img src={intro.image} alt="Unable to render" />
            <br />
            {intro.desc}
          </div>
        )}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: input => dispatch(editIntro(input)),
})

const mapStateToProps = state => ({
  intro: state.intro,
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
