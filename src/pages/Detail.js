import React, { Component } from "react";
import * as action from "../redux/action";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";
class Detail extends Component {
  renderHTML = () => {
    console.log(this.props.detailMovie);

    let { detailMovie } = this.props;
    if (detailMovie.lichChieu) {
      return detailMovie.lichChieu.map(movie => {
        return (
          <tr key={movie.maLichChieu}>
            <td>{movie.thongTinRap.tenCumRap}</td>
            <td>{movie.thongTinRap.tenRap}</td>
            <td>{new Date(movie.ngayChieuGioChieu).toLocaleDateString()}</td>
            <td>{new Date(movie.ngayChieuGioChieu).toLocaleTimeString()}</td>
            <td>
              <NavLink className="btn btn-danger" to={`/book-chair/${movie.maLichChieu}`}>Chọn ghế </NavLink>
            </td>
          </tr>
        );
      });
    }
  };
  render() {
    let { detailMovie } = this.props;
    return (
      <div className="container">
        <h3>Detail</h3>

        <div className="row">
          <div className="col-sm-6">
            <img className="img-fulid" src={detailMovie.hinhAnh} alt="" />
          </div>
          <div className="col-sm-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>tên phim</td>
                  <td>{detailMovie.tenPhim}</td>
                </tr>
                <tr>
                  <td>Mô tả </td>
                  <td>{detailMovie.moTa}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Cụm Rạp</th>
                    <th>Tên rạp</th>
                    <th>Ngày chiếu </th>
                    <th>Giờ chiếu</th>
                  </tr>
                </thead>
                <tbody>{this.renderHTML()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getDetail(id);
  }
}

const mapStatetoProps = state => {
  return {
    detailMovie: state.movieReducer.detailMovie
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDetail: id => {
      dispatch(action.actGetDetailMovieAPI(id));
    }
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(Detail);
