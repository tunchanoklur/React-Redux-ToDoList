export const ClickEdit = (index) => {
    return{
        type:'EDIT',
        index
    }
}

export const ChangeStatus = (index) => {
    return{
        type:'CHANGE_STATUS',
        index
    }
}

export const ClickDelete = (index) => {
    return{
        type:'DELETE',
        index
    }
}