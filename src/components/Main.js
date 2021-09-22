import React from "react";
import FirstPage from "./FirstPage";
import Books from "./books/Books";
import {
    Switch,
    Route, Link
} from "react-router-dom";
import BookInfo from "./books/BookInfo";
import BookEdit from "./books/BookEdit";
import useStyles from "../styles";
import Authors from "./authors/Authors";
import AuthorEdit from "./authors/AuthorEdit";
import AuthorInfo from "./authors/AuthorInfo";


function Main() {
    const classes = useStyles()
    return (
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <FirstPage/>
                    </Route>
                    <Route path="/books/info/:id">
                        <BookInfo/>
                    </Route>
                    <Route path="/books/edit/:id">
                        <BookEdit/>
                    </Route>
                    <Route path="/books/add">
                        <BookEdit/>
                    </Route>
                    <Route path="/books">
                        <Books/>
                    </Route>
                    <Route path="/authors/edit/:id">
                        <AuthorEdit/>
                    </Route>
                    <Route path="/authors/info/:id">
                        <AuthorInfo/>
                    </Route>
                    <Route path="/authors/add">
                        <AuthorEdit/>
                    </Route>
                    <Route path="/authors">
                        <Authors/>
                    </Route>
                </Switch>
            </div>
    );
}

export default Main;