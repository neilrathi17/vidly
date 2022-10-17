import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listgroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./movietable";
import SearchBox from "./common/searchbox";
import _, { filter } from "lodash";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((c) => c._id != movie._id);
    this.setState({ movies: movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSort = ({ sortColumn }) => {
    this.setState({ sortColumn });
  };

  handleSearch = (search) => {
    this.setState({ searchQuery: search, selectedGenre: null, currentPage: 1 });
  };

  getpagedata = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      searchQuery,
      movies: allMovies,
      sortColumn,
    } = this.state;


    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      else if(selectedGenre && selectedGenre._id)
      filtered=allMovies.filter(m=>m.genre._id ===selectedGenre._id)

    // const filtered =
    //   selectedGenre && selectedGenre._id
    //     ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
    //     : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { movies: allMovies, sortColumn } = this.state;

    if (count === 0) return <p>There are no movies in the database</p>;

    const { totalCount, data: movies } = this.getpagedata();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>

        {/* left half --------------------------------------------------------------------------------------------------*/}

        <div className="col">
          <Link
            to="/movies/new"
            className="btn btn-prmiary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <SearchBox value={this.state.searchQuery} onChange={this.handleSearch} />
          <p>Showing {totalCount} movies in the database </p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
