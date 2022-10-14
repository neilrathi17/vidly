import React, { Component } from "react";
import Like from "./common/like";

import Table from "./common/table";
import { Tab } from "bootstrap";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title",content:movie=><Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
    { path: "genre.name", label: "genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
  ];

  render() {
    const { movies } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={this.props.sortColumn}
        onSort={this.props.onSort}
      />
    );
  }
}

export default MoviesTable;
