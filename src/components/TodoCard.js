import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function TodoCard(props) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={10}>
                            <FormControlLabel
                                control={
                                    <Checkbox color="primary" checked={props.done || false} disabled={props.done || false} onChange={() => props.UpdateStatus(props.id)} />
                                }
                                label={props.text}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Button disabled={props.done} onClick={() => props.ClickEdit(props.id)} color="default">
                                Edit
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button onClick={() => props.ClickDelete(props.id)} color="default">
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <br />
        </div>
    );
}