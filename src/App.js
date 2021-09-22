import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {ThemeProvider} from "@material-ui/styles";
import {CssBaseline} from "@material-ui/core";
import theme from "./components/Theme";
function App() {
  return (
      <ThemeProvider theme={theme}>
         <CssBaseline/>
      <Router>
        <Header/>
        <Main/>
        <Footer/>
      </Router>
      </ThemeProvider>
  );
}

export default App;
