import React from 'react';
import TodoCard from './TodoCard'
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux' //to connect component to store

class TodoList extends React.Component {
  render(){
    return (
      <div>
          {
            this.props.lists.length===0? <h2>No to do list</h2>
            :this.props.lists.map((list,id)=>{
                return (
                    <Grid item xs={12} key={id}>
                        <TodoCard 
                            id={id}
                        />
                    </Grid>
                )
            })
          }
      </div>
    );
  }
}

const StateToProps = (state/*from store*/)=>{
    return{
        lists: state.lists //update to this component
    }
}
export default connect(StateToProps)(TodoList)
//connect is a function return higher order component(HOC) and that HOC will receive TodoList as argument