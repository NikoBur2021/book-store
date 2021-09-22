import React from "react";
import {Link} from "react-router-dom";


function Header() {
    return (
        <div className="App">
            <pre>THIS IS HEADER</pre>
            <Link to="/">
                <button>FIRST PAGE</button>
            </Link>
            <Link to="/books">
                <button>BOOKS</button>
            </Link>
            <Link to="/authors">
                <button>AUTHOR</button>
            </Link>
        </div>
    );
}

export default Header;