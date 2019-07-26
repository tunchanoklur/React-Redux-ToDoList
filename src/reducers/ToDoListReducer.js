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
    console.log(action)
    //form actions
    if(action.type==="SUBMIT"){
        //add date or edit data (control dialog's form submit)
        if(state.method==="Add"){
            //action send form
            return {
                ...state,
                lists: [...state.lists,state.form]
            }
        }
        else if(state.method==="Edit"){
            //action send index and form
            let new_lists = state.lists.slice();
            new_lists[state.edited_index]=state.form
            return {
                ...state,
                lists: new_lists
            }
        }
    }
    else if(action.type==="OPEN_DIALOG"){
        return {
            ...state,
            show_dialog:true
        }
    }
    else if(action.type==="CLOSE_DIALOG"){
        return {
            ...state,
            form:{
                done:false,
                text:""
            },
            edited_index:-1,
            show_dialog:false,
            method:"Add" //default method is add
        }
    }
    else if(action.type==="UPDATE_FORM"){
        // console.log("accepted event",action.event.target.value)
        return {
            ...state,
            form:{
                ...state.form,
                text:action.event.target.value
            }
        }
    }
    //list actions
    else if(action.type==="EDIT"){
        console.log("edit accepted",action.index)
        return{
            ...state,
            method:"Edit",
            show_dialog:true,
            edited_index:action.index,
            form:state.lists[action.index]
        }
    }
    else if(action.type==="CHANGE_STATUS"){
        console.log("change status accepted",action.index)
        //change status when pressed check (done)
        let new_lists =state.lists.slice() //duplicate array - prevent direct mutation
        new_lists[action.index].done = !new_lists[action.index].done
        return{
            ...state,
            lists:new_lists
        }
    }
    else if(action.type==="DELETE"){
        console.log("delete accepted",action.index)
        let new_lists = state.lists.slice()
        new_lists.splice(action.index,1)
        return{
            ...state,
            lists:new_lists
        }
    }
    return state;
}

export default ToDoListReducer;