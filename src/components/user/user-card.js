import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import {env} from "../api/env";
import {CardActionArea} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}));

export const UserCard = (props) =>{
    const {user} = props;
    const classes = useStyles();
    return(

        <Card className={classes.root}>
            <CardActionArea >
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="subtitle1" color="textSecondary">
                        Brought up by
                    </Typography>
                    <Typography component="h5" variant="h5">
                        {user.username}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>

                </div>
            </div>
            </CardActionArea>
            <CardMedia
                className={classes.cover}
                image={env.baseURL+user.avatar.formats.small.url}
                title="Live from space album cover"
            />
        </Card>
    )
}