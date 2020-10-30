import React, {useEffect, useState} from "react";
import {API} from "../api/api";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./project/project-card";

export const Projects = (props) => {
    const [projects,setProjects] = useState([])

    useEffect(()=>{
        API.get('/projects').then((response)=>{
            setProjects(response.data)
        })
    },[])

    if(projects.length>0){
        return (
        <props.template title={props.title}>
            <Grid container style={{paddingTop:'30px',paddingBottom:'30px'}}>
                {projects.map((project)=>
                 <Grid key={project.id} item >
                     <ProjectCard  project={project}/>
                 </Grid>
                )}
            </Grid>
        </props.template>
        )
    }

    return null;
}