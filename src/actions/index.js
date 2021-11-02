export const EDIT_INTRO = 'EDIT_INTRO'

export const editIntro = ({ image, desc })=> ({
    type: EDIT_INTRO,
    image: image,
    desc: desc
})