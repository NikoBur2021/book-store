import {useHistory, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Breadcrumbs, Button, CardContent, Container, Link, Paper, Typography} from "@material-ui/core";
import useStyles from "../../styles";

function BookInfo() {
    const classes = useStyles()
    const history = useHistory();
    const {id} = useParams(); // 1) первым шагом мы получаем ID через useParams
    const [book, setBook] = useState({
        name: '',
        author: {},
        price: 0,
        storeCount: 0
    });
    useEffect(() => {
        axios.get('https://books-backend2021.herokuapp.com/api/v1/books/' + id)
            .then(result => setBook(result.data))
            .catch(error => alert(error) )
    }, [])
    console.log(book)

    function deleteBook() {
        axios.delete('https://books-backend2021.herokuapp.com/api/v1/books/' + id)
            .then(() => history.push("/books"))
            // Если удаление прошло успешно, то мы должны перейти на страничку localhost...
            .catch(error => alert(error))
    }


    function handleClick() {

    }

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/" onClick={handleClick}>
                    Main Page
                </Link>
                <Link color="inherit" href="/books" onClick={handleClick}>
                    Books
                </Link>
                <Typography color="textPrimary">Book info</Typography>
            </Breadcrumbs>
            <Container className={classes.cardGrid} maxWidth="lg">
                <Paper variant="outlined">
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h3">
                            Book id: {book.id},
                        </Typography>
                        <Typography gutterBottom variant="h3">
                            Author: {book.author.firstName} {book.author.lastName}
                        </Typography>
                        <Typography variant="h3">
                            Name: {book.name}
                        </Typography>
                        <Typography variant="h3">
                            Price: ${book.price}
                        </Typography>
                        <Button onClick={deleteBook}>Delete</Button>
                    </CardContent>
                </Paper>
            </Container>
        </div>
    )
}

export default BookInfo;