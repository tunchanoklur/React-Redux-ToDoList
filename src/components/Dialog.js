import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux'
import {ClickSubmit,CloseDialog,OpenDialog,UpdateForm} from '../actions/dialogActions'

class FormDialog extends React.Component {
  handleSubmit=()=>{
    this.props.ClickSubmit() //submit data
    this.props.CloseDialog() //then clear dialog
  }
  handleClose=()=>{
    this.props.CloseDialog()
  }
  handleOpen=()=>{
    this.props.OpenDialog()
  }
  handleFormUpdate=(event)=>{
    this.props.UpdateForm(event)
  }
  render(){
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleOpen}>
          Add To Do List
        </Button>
        <Dialog open={this.props.show_dialog} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">{this.props.method} to do list</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="text"
              type="text"
              fullWidth
              onChange={this.handleFormUpdate}
              value={this.props.form.text}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSubmit} color="primary">
              {this.props.method}
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
const StateToProps = (state/*from store*/)=>{
  return{
    show_dialog: state.show_dialog, //update to this component
    form:state.form,
    method:state.method
  }
}
const DispatchToProps = (dispatch)=>{
  return{
    ClickSubmit:()=>{dispatch(ClickSubmit())},
    CloseDialog:()=>{dispatch(CloseDialog())},
    OpenDialog:()=>{dispatch(OpenDialog())},
    UpdateForm:(event)=>{dispatch(UpdateForm(event))}
  }
}
export default connect(StateToProps,DispatchToProps)(FormDialog)