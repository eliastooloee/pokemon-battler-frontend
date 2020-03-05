import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default class SignUp extends React.Component {
    state = {
        username: "",
        myPokemon: null
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.signUp(this.state.username)
        this.props.history.push("/pokedex")
    }

    handleChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <div className="SignUp">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ marginTop: '15vh' }}>
                    <Card variant="outlined">
                        <CardContent>
                            <form onSubmit={this.handleSubmit}>
                                <Typography>
                                    <TextField size="small" id="outlined-basic" label="Username" variant="outlined" onChange={event => this.handleChange(event)} />
                                </Typography>
                                <CardActions>
                                    <Button type="submit" variant="contained" color="primary">Sign Up</Button>
                                </CardActions>
                            </form>
                        </CardContent>

                    </Card>

                </Grid>
            </div >
        )
    }
}