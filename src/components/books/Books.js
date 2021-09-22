import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    Link,
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
import useStyles from "../../styles";

function Books() {
    const classes = useStyles()
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/api/v1/books',{
            params:{
                page:0,
                size:100
            }
        })
            .then(result => setBooks(result.data.content))
            .catch(error => alert(error))

    },[])
    function handleClick() {

    }

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Main Page
                </Link>
                <Typography color="textPrimary">Books</Typography>
            </Breadcrumbs>
            <Container className={classes.cardGrid} maxWidth="md">
                <Button component={Link} to={'/books/add'} variant="outlined">Add Books</Button>
                <Grid container spacing={4}>
                    {books.map(book => (
                        <Grid item key={book.id} md={3}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={book.picture}/>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        {book.author.firstName} {book.author.lastName}
                                    </Typography>
                                    <Typography gutterBottom variant="h5">
                                        {book.name}
                                    </Typography>
                                    <Typography>
                                       ${book.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="secondary" component={Link} to={`/books/info/${book.id}`}>Info</Button>
                                    <Button size="small" color="secondary" component={Link} to={`/books/edit/${book.id}`}>Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
export default Books;