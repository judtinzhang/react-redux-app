export const EDIT_INTRO = 'EDIT_INTRO'

export const editIntro = ({ image, desc })=> ({
    type: EDIT_INTRO,
    image: image,
    desc: desc
})

let id = 0
export const ADD_POST = 'ADD_POST'
export const MODIFY_POST = 'MODIFY_POST'
export const DELETE_POST = 'DELETE_POST'

export const editPost = ({ title, image, desc }) => ({
    type: ADD_POST,
    id: id++,
    title: title,
    image: image,
    desc: desc
})