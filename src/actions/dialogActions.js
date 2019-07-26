export const ClickSubmit = () => {
    return{
        type:'SUBMIT'
    }
}

export const CloseDialog = () => {
    return{
        type:'CLOSE_DIALOG'
    }
}
export const OpenDialog = () => {
    return{
        type:'OPEN_DIALOG'
    }
}

export const UpdateForm = (event) => {
    return{
        type:'UPDATE_FORM',
        event
    }
}