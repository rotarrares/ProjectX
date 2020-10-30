import React, {useEffect, useState} from "react";
import {API} from "../api/api";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {UserCard} from "./user-card";


export const Project = (props) => {
    const id = props.match.params.id;
    const [project,setProject] = useState(null)

    useEffect(()=>{
        API.get('/projects/'+id).then((response)=>{
            setProject(response.data)
        })
    },[])



    if(project)
        return(
            <props.template title={project.title}>
                <Container>
                    <Grid container>
                        <Grid xs={12} md={4} item>
                            <UserCard user={project.createdBy}/>
                        </Grid>
                        <Grid xs={12} md={6} item>

                        </Grid>
                    </Grid>
                </Container>
            </props.template>
    )
    return null;
}