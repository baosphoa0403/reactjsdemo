import React, { Component } from "react";
import Movie from "./../components/Movie";
import { connect } from "react-redux";
import * as action from "../redux/action/index";

class ListMovie extends Component {
  componentDidMount() {
    this.props.getListMovie();
  }
  renderHTML = () => {
    // do lúc đầu sever chưa trả về cho web nên là 1 cái mảng rổng
    if (this.props.listMovie.length > 0) {
      let { listMovie } = this.props;
      return listMovie.map(movie => {
        return <Movie movie={movie} key={movie.maPhim} />;
      });
    }
    // console.log(this.props.listMovie);
  };
  render() {
    return (
      <div className="container">
        <h3>ListMovie</h3>
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}
// b1 mình sẽ

const mapDispatchToProps = dispatch => {
  return {
    getListMovie: () => {
      dispatch(action.actGetListMovieAPI());
    }
  };
};

const mapStateToProps = state => {
  return {
    listMovie: state.movieReducer.listMovie
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
