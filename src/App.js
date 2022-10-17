import React, { Component } from "react";
import Movies from "./components/movies";
import { Route, Routes, Navi, Navigate } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./navbar";
import MovieForm from "./components/movieForm"
import LoginForm from "./components/loginform";
import RegisterForm from "./components/registerform";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
            <Route path="/movies/:id" element={<MovieForm/>}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/rentals" element={<Rentals />}></Route>
            <Route path="/notfound" element={<NotFound />}></Route>
            <Route path="/" element={<Navigate replace to="/movies" />}></Route>
            <Route path="*" element={<Navigate replace to="/notfound" />} />
            <Route path="*" element={<Navigate replace to="/not-found" />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
