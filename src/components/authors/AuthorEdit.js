import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {Breadcrumbs, Button, Container, Link, TextField, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import useStyles from "../../styles";

function AuthorEdit() {
    const classes = useStyles()
    const history = useHistory(); // позволяет переходить по роутеру из js. Мы можем перейти на любой url
    const {id} = useParams();
    const [validation, setValidation] = useState({
        firstNameError: false, // по умолчанию у нас нет ошибок
        lastNameError: false,
    })
    const [author, setAuthor] = useState({
        firstName: '',  // Поля нужны для input иначе было бы undefined
        lastName: ''
    });


    useEffect(() => {
        if (id !== undefined) {
            axios.get('https://books-backend2021.herokuapp.com/api/v1/authors/' + id)
                .then(result => setAuthor(result.data))
                .catch(error => alert(error))
        }
    }, [])




    function save() {
        if (id !== undefined) { // Если ID определено, то мы
            axios.put('https://books-backend2021.herokuapp.com/api/v1/authors', author)// просто редактируем Автора
                .then(() => history.push("/authors"))
                .catch(error => alert(error))
        } else {              // а если нет ID, то мы
            axios.post('https://books-backend2021.herokuapp.com/api/v1/authors', author)// добавляем нового Автора
                .then(() => history.push("/authors"))
                .catch(error => alert(error))
        }
    }
    function changeTextFieldHandler(event) {
        setAuthor({
            ...author,
            [event.target.name]: event.target.value
        })
    }
    function validationFirstName(event){
        const input = event.target;
        if(input.value === ""){
            setValidation({
                ...validation,
                firstNameError: true

            })

        }else {
            setValidation({
                ...validation,
                firstNameError: false
            })
        }
    }
    function validationLastName(event){
        const input = event.target;
        if(input.value === ""){
            setValidation({
                ...validation,
                lastNameError: true

            })

        }else {
            setValidation({
                ...validation,
                lastNameError: false
            })
        }
    }

    function handleClick() {

    }
    return (
        <Container className={classes.cardGrid} maxWidth="md" minWidth="xs" >
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Main Page
                </Link>
                <Link color="inherit" href="/authors" onClick={handleClick}>
                    Authors
                </Link>
                <Typography color="textPrimary">Author Edit</Typography>
            </Breadcrumbs>
                <pre>
                     <TextField
                         error={validation.firstNameError}
                         helperText={validation.firstNameError ? "First name must be filled" : ""}
                         label="First Name"
                         variant="outlined"
                         value={author.firstName} // На что меняется это value
                         name="firstName" // Name показывает, какой именно Атрибут стейта будет меняться. Что именно менятся - это name
                         onChange={changeTextFieldHandler}
                         onBlur={validationFirstName}
                     />
                </pre>
                <pre>
                     <TextField
                         error={validation.lastNameError}
                         helperText={validation.lastNameError ? "First name must be filled" : ""}
                         label="Last Name"
                         variant="outlined"
                         value={author.lastName}
                         name="lastName"
                         onChange={changeTextFieldHandler}
                         onBlur={validationLastName}
                     />
                </pre>
            <Button onClick={save} disabled={validation.firstNameError || validation.lastNameError}>Save</Button>
        </Container>

    );
}


export default AuthorEdit;