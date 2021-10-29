import React, {useEffect, useState} from "react";
import useStyles from "../../styles";
import {useParams} from "react-router";
import axios from "axios";
import {Breadcrumbs, CardContent, Container, Link, Paper, Typography} from "@material-ui/core";

function AuthorInfo() {
    
    
    const classes = useStyles()
    const {id} = useParams();
    const [author, setAuthor] = useState({});
    useEffect(() => {
        axios.get('https://books-backend2021.herokuapp.com/api/v1/authors/' + id)
            .then(result => setAuthor(result.data))
            .catch(error => alert(error))
    }, [])

    function handleClick() {

    }

    return (

        <div className="App">
            <Container className={classes.cardGrid} maxWidth="md" minWidth="xs">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Main Page
                    </Link>
                    <Link color="inherit" href="/authors" onClick={handleClick}>
                        Authors
                    </Link>
                    <Typography color="textPrimary">Information about Author</Typography>
                </Breadcrumbs>
                <Paper variant="outlined">
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h3">
                            Author ID -{author.id},
                        </Typography>
                        <Typography variant="h3">
                            Name - {author.firstName}
                        </Typography>
                        <Typography variant="h3">
                            Last Name - {author.lastName}
                        </Typography>
                    </CardContent>
                </Paper>
            </Container>
        </div>
    );
}

export default AuthorInfo;
