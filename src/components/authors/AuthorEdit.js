import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {Breadcrumbs, Button, Link, TextField, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

function AuthorEdit() {
    const history = useHistory(); // позволяет переходить по роутеру из js. Мы можем перейти на любой url
    const {id} = useParams();
    const [author, setAuthor] = useState({
        firstName: '',  // Поля нужны для input иначе было бы undefined
        lastName: ''
    });


    useEffect(() => {
        if (id !== undefined) {
            axios.get('http://localhost:8080/api/v1/authors/' + id)
                .then(result => setAuthor(result.data))
                .catch(error => alert(error))
        }
    }, [])



    function save() {
        if (id !== undefined) { // Если ID определено, то мы
            axios.put('http://localhost:8080/api/v1/authors', author)// просто редактируем Автора
                .then(() => history.push("/authors"))
                .catch(error => alert(error))
        } else {              // а если нет ID, то мы
            axios.post('http://localhost:8080/api/v1/authors', author)// добавляем нового Автора
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

    function handleClick() {

    }
    return (
        <div className="App">
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
                         label="First Name"
                         variant="outlined"
                         value={author.firstName} // На что меняется это value
                         name="firstName" // Name показывает, какой именно Атрибут стейта будет меняться. Что именно менятся - это name
                         onChange={changeTextFieldHandler}
                     />
                </pre>
            <pre>
                     <TextField
                         label="Last Name"
                         variant="outlined"
                         value={author.lastName}
                         name="lastName"
                         onChange={changeTextFieldHandler}
                     />
                </pre>
            <Button onClick={save}>Save</Button>
        </div>

    );
}


export default AuthorEdit;