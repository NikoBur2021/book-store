import logo from "../../src/images/book-clipart-12.jpg";
import React from "react";

function FirstPage() {
    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                   Welcome to our book store
                </p>
                {/*<a*/}
                {/*    className="App-link"*/}
                {/*    href="https://reactjs.org"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*    Learn React*/}
                {/*</a>*/}
            </header>
        </div>
    );
}

export default FirstPage;