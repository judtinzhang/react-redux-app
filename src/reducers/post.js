import { ADD_POST,  MODIFY_POST, DELETE_POST } from "../actions"

const defaultState = []

const PostReducer = (state=defaultState, action) => {
    const {type, id, title, image, desc} = action

    switch (type){
        case ADD_POST:
            return [...state, {id, title, image, desc}]
        case MODIFY_POST:
            return state.map(post => {
                if (post.id === id) {
                    return {...post, title, image, desc}
                }
            })
        case DELETE_POST:
            return state.filter(post => post.id !== id)
        default:
            return state
    }
}

export default PostReducer