import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as action from "../redux/action";
import Movie from "../components/Movie";
function Home(props) {
  const renderHTML = () => {
    return props.listMovie.map(movie => {
      return <Movie key={movie.maPhim} movie={movie} />;
    });
  };
  useEffect(() => {
    props.getListMovie();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <div className="row">{renderHTML()}</div>
    </div>
  );
}



const mapDispatchToProps = dispacth => {
  return {
    getListMovie: () => {
      dispacth(action.actGetListMovieAPI());
    }
  };
};
const mapStateToProps = state => {
  return {
    listMovie: state.movieReducer.listMovie
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
