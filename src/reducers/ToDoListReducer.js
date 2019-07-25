const initState = {
    lists:[],
    show_dialog:false,
    method:"Add",
    edited_index:-1,
    form:{
    done:false,
    text:""
    }
}
const ToDoListReducer = (state = initState,action) =>{
    return state;
}

export default ToDoListReducer;