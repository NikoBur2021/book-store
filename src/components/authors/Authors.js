import React, {useEffect, useState} from "react";
import useStyles from "../../styles";
import axios from "axios";
import {
    Link as MuiLink,
    Breadcrumbs,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";


function Authors() {
    const classes = useStyles()
    const [authors, setAuthors] = useState([]);
    useEffect(()=>{
        axios.get('https://books-backend2021.herokuapp.com/api/v1/authors',{
            params:{
                page:0,
                size:100
            }
        })
            .then(result => setAuthors(result.data.content))
            .catch(error => alert(error))

    },[])

    function handleClick(event){
    }

    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="md" minWidth="xs" >
                <Breadcrumbs aria-label="breadcrumb">
                    <MuiLink color="inherit" href="/" onClick={handleClick}>
                        Main Page
                    </MuiLink>
                    <Typography color="textPrimary">Authors</Typography>
                </Breadcrumbs>
                <Grid item xs={12} align="center">
                    <Button component={Link} to={`/authors/add`} variant="contained">Add Authors</Button>
                </Grid>
                <Grid container spacing={4}>
                    {authors.map(author => (
                        <Grid item key={author.id} md={3}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={author.picture}/>
                                <CardContent className={classes.cardContent}>
                                    <Typography>
                                        N{author.id}
                                    </Typography>
                                    <Typography gutterBottom variant="h5">
                                       First Name:{author.firstName}
                                    </Typography>
                                    <Typography gutterBottom variant="h5">
                                        Last Name:{author.lastName}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" size="small" color="second" component={Link} to={`/authors/edit/${author.id}`}>Edit</Button>
                                    <Button variant="contained" size="small" color="second" component={Link} to={`/authors/info/${author.id}`}>Info</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Authors;