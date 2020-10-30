import Card from "@material-ui/core/Card";
import {CardContent, CardHeader, IconButton} from "@material-ui/core";
import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Help, HelpOutline, QuestionAnswer} from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles ((theme)=>({
    margin: {
        margin: theme.spacing(2),
    },
    fullWidth:{
        width:'100%',
    },
    submit:{
        marginLeft: 'auto',
    },
}))

export const FeaturedComments = (props) => {
    const classes = useStyles();
    return(
        <Card>
            <CardHeader
                action={<Tooltip title={"Your questions will be answered by the project team members"}>
                    <IconButton><HelpOutline/></IconButton>
                </Tooltip>}
                title={"Ask"}
            >

            </CardHeader>

            <form autoComplete="on" className={classes.fullWidth}>
                <FormControl fullWidth  variant="outlined">
                    <InputLabel className={classes.margin} htmlFor="outlined-adornment-amount">Question</InputLabel>
                    <OutlinedInput className={classes.margin}
                        labelWidth={70}
                    />

                </FormControl>
                <CardActions>
                    <Button  type={"submit"} color="primary">Submit </Button>
                </CardActions>

            </form>

        </Card>
    )
}