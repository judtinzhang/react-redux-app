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

export const editPost = ({ type=ADD_POST, n_id=id, title, image, desc }) => ({
    type: type,
    id: type===ADD_POST ? id++ : n_id,
    title: title,
    image: image,
    desc: desc
})