import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import {ClickEdit,ChangeStatus,ClickDelete} from '../actions/listActions'

class TodoCard extends React.Component {
    handleEdit=(id)=>{
        this.props.ClickEdit(id) //pressed edit
    }
    handleChangeStatus=(id)=>{
        this.props.ChangeStatus(id) //pressed change status
    }
    handleDelete=(id)=>{
        this.props.ClickDelete(id) //pressed delete
    }
  render(){
    return (
        <div>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={10}>
                            <FormControlLabel
                                control={
                                    <Checkbox color="primary"
                                        checked={this.props.done||false}
                                        disabled={this.props.done||false}
                                        onChange={()=>this.handleChangeStatus(this.props.id)} 
                                    />
                                }
                                label={this.props.text}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Button disabled={this.props.done} onClick={()=>this.handleEdit(this.props.id)} color="default">
                                Edit
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button onClick={()=>this.handleDelete(this.props.id)} color="default">
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <br/>
        </div>
    );
  }
}
const StateToProps = (state/*from store*/,defaultProps)=>{
    let tmp = defaultProps
    console.log("default props",tmp)
    return{
        id:defaultProps.id,
        text:state.lists[defaultProps.id].text,
        done:state.lists[defaultProps.id].done,
    }
}
const DispatchToProps = (dispatch)=>{
    return{
        ClickEdit:(id)=>{dispatch(ClickEdit(id))},
        ChangeStatus:(id)=>{dispatch(ChangeStatus(id))},
        ClickDelete:(id)=>{dispatch(ClickDelete(id))},
    }
}
export default connect(StateToProps,DispatchToProps)(TodoCard)