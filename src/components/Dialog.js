import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={props.ClickOpen}>
        Add To Do List
        </Button>
      <Dialog open={props.show_dialog} onClose={props.ClickClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.method} to do list</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            onChange={props.UpdateForm}
            value={props.form.text}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.ClickAdd} color="primary">
            {props.method}
          </Button>
          <Button onClick={props.ClickClose} color="primary">
            Cancel
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}