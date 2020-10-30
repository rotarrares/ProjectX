import {makeStyles} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { Favorite, MoreVert, Share} from "@material-ui/icons";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import {env} from "../api/env";
import {useHistory} from "react-router";
import {date_format} from "../utils/date-format";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

    avatar: {
        backgroundColor: red[500],
    },
}));

export default function ProjectCard(props) {
    const classes = useStyles();
    const history = useHistory();

    const handleProjectClick = () => {
        history.push('/projects/'+props.project.id);
    };
    console.log(props.project.createdBy)
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar alt={"Avatar"} src={env.baseURL+props.project.createdBy.avatar.formats.thumbnail.url} aria-label={"avatar"} className={classes.avatar}>
                        {props.project.createdBy.username[0]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={props.project.createdBy.username}
                subheader={date_format(props.project.created_at)}
            />
            <CardActionArea onClick={handleProjectClick}>
            <CardMedia
                className={classes.media}
                image={env.baseURL+props.project.image.formats.small.url}
                title={props.project.image.alternativeText}
            />
            <CardContent>
                <Typography variant="h5" component="h5">
                    {props.project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.project.short_idea}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Favorite />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    );
}