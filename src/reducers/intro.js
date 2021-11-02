import { EDIT_INTRO } from "../actions"

const defaultState = {image: 'Enter image url', desc: 'Enter Description'}

const IntroReducer = (state=defaultState, action) => {
    const {type, image, desc} = action

    switch (type){
        case EDIT_INTRO:
            return {image, desc}
        default:
            return state
    }
}

export default IntroReducer