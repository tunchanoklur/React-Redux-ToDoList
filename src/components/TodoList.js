import React from 'react';
import TodoCard from './TodoCard'
import Grid from '@material-ui/core/Grid';

export default function TodoList(props){
    return (
        <div>
            {
            props.lists.length===0? <h2>No to do list</h2>
            :props.lists.map((list,id)=>{
                return (
                    <Grid item xs={12} key={id}>
                        <TodoCard 
                            id={id}
                            text={list.text}
                            done={list.done}
                            UpdateStatus={props.UpdateStatus}
                            ClickDelete={props.ClickDelete}
                            ClickEdit={props.ClickEdit}
                        />
                    </Grid>
                )
            })
            }
        </div>
    );
}