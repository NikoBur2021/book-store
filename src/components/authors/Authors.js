import React, {useEffect, useState} from "react";
import useStyles from "../../styles";
import axios from "axios";
import {
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
        axios.get('http://localhost:8080/api/v1/authors',{
            params:{
                page:0,
                size:100
            }
        })
            .then(result => setAuthors(result.data.content))
            .catch(error => alert(error))
    },[])
    function handleClick(event){
        event.preventDefault();
        console.info('You clicked a breadcrumb.');

    }
    return (
        <div className="App">
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/" onClick={handleClick}>
                    Main Page
                </Link>
                <Typography color="textPrimary">Authors</Typography>
            </Breadcrumbs>
            <Button component={Link} to={`/authors/add`} variant="outlined">Add Authors</Button>
            <Container className={classes.cardGrid} maxWidth="lg">
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
                                    <Button size="small" color="secondary" component={Link} to={`/authors/edit/${author.id}`}>Edit</Button>
                                    <Button size="small" color="secondary" component={Link} to={`/authors/info/${author.id}`}>Info</Button>
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