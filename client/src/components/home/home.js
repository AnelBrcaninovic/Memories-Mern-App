import React, {useState,useEffect}  from "react"
import Posts from "../posts/Posts"
import Form from "../form/Form"


import {Container,Grow, Grid} from "@material-ui/core";
import useStyles from '../../styles'
import {getPosts} from '../../actions/posts'
import {useDispatch} from 'react-redux';

const Home = () =>{
    const [currentId, setCurrentId] = useState(null);
 
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch, currentId]);

    return(
        <Grow in>
        <Container>
            <Grid container className={classes.mainContainer} justifyContent = "space-between" alignItems="stretch" spacing={3}>
                <Grid item xs = {12} sm={7}>
                    <Posts  setCurrentId ={setCurrentId} />
                 
                </Grid>

                <Grid item xs = {12} sm={4}>
                    <Form currentId = {currentId} setCurrentId={setCurrentId}/>
                </Grid>
            </Grid>
        </Container>
    </Grow>
    )
}
export default Home;