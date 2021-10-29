import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Breadcrumbs, Button, Container, Link, MenuItem, Select, TextField, Typography} from "@material-ui/core";
import useStyles from "../../styles";
import {useHistory} from "react-router-dom";

function BookEdit() {
    const styles = useStyles();
    const history = useHistory();
    const {id} = useParams();
    const [validation, setValidation] = useState({
        storeCountError: false, // по умолчанию у нас нет ошибок
        nameError: false,
        priceError: false
    })
    const [authors, setAuthors] = useState([]);
    const [book, setBook] = useState({
        name: '',
        author: {},
        price: 0,
        storeCount: 0
    });



    useEffect(() => {
        axios.get('https://books-backend2021.herokuapp.com/api/v1/authors', {
            params: {
                page: 0,
                size: 100
            }
        })
            .then(result => setAuthors(result.data.content))
            .catch(error => alert(error))
        if (id !== undefined) {
            axios.get('http://localhost:8080/api/v1/books/' + id)
                .then(result => setBook(result.data))
                .catch(error => alert(error))

        }
    }, [])

    function save() {
        if (id !== undefined) {
            axios.put('http://localhost:8080/api/v1/books', book)
                .then(() => history.push("/books"))
                .catch(error => console.log(error))
        } else {
            axios.post('http://localhost:8080/api/v1/books', book)
                .then(() => history.push("/books"))
                .catch(error => console.log(error))
        }
    }

    function changeInputHandler(event) {
        setBook({
            ...book,// Spread оператор означает, Взять все старие поля book как есть, а name будет равен event.target.value
            // мы просто меняем старые поля, из book, и меняем их на новые значения
            [event.target.name]: event.target.value
        })
    }

    function handleClick() {
    }

    function validationPositive(event){
        const input = event.target;
        if (input.value < 0 || input.value === "") {
            setValidation({
                ...validation,
                storeCountError: true

            })

        } else {
            setValidation({
                ...validation,
                storeCountError: false
            })
        }
    }
    function validationPrice(event) {
        const input = event.target;
        if (input.value < 0 || input.value === "") {
            setValidation({
                ...validation,
                priceError: true

            })

        } else {
            setValidation({
                ...validation,
                priceError: false
            })
        }
    }

    function validationName(event){
        const input = event.target;
        if (input.value === "" || input.value.trim() === "") { // trim - обрезает ВСЕ пробелы.
            setValidation({
                ...validation,
                nameError: true

            })

        } else {
            setValidation({
                ...validation,
                nameError: false
            })
        }
    }

    return (
        <Container className={styles.cardGrid} maxWidth="md" minWidth="xs" >
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Main Page
                </Link>
                <Link color="inherit" href="/books" onClick={handleClick}>
                    Books
                </Link>
                <Typography color="textPrimary">
                    {
                        id === undefined ? "Add" : "Edit"
                    }
                </Typography>
            </Breadcrumbs>
            <pre>
                <pre>
                     <TextField
                         error={validation.nameError}
                         helperText={validation.nameError ? "Book name must be filled" : ""}
                         label="Book name"
                         variant="outlined"
                         value={book.name}
                         name="name"
                         onChange={changeInputHandler}
                         onBlur={validationName}
                     />
                </pre>
                <pre>
                     <TextField
                         error={validation.priceError}
                         helperText={validation.priceError ? "price must be positive" : ""}
                         label="Price"
                         type="number"
                         variant="outlined"
                         value={book.price}
                         name="price"
                         onChange={changeInputHandler}
                         onBlur={validationPrice}

                     />
                </pre>
                <pre>
                   <TextField
                       error={validation.storeCountError}
                       helperText={validation.storeCountError ? "store count must be positive" : ""}
                       label="Store count"
                       type="number"
                       variant="outlined"
                       value={book.storeCount}
                       name="storeCount"
                       onChange={changeInputHandler}
                       onBlur={validationPositive} // событие называется потерей фокуса.
                   />
                </pre>
                <pre>
                    <Select
                        renderValue={a => a.lastName === undefined ? "choose author" :  a.lastName + ' ' + a.firstName}
                        name="author"
                        onChange={changeInputHandler}
                        className={styles.authorSelect}
                        value={book.author}
                        label="Author"
                    >
                        {
                            authors.map(author => <MenuItem key={author.id} value={author}>
                                {author.id} {author.lastName} {author.firstName}
                            </MenuItem>)
                        }
                    </Select>
                </pre>

                <Button onClick={save} disabled={validation.storeCountError || validation.priceError || validation.nameError}>Save</Button>
            </pre>
        </Container>
    )
}

export default BookEdit;


