import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../redux/action";

class BookChair extends Component {
  componentDidMount() {
    console.log(this.props);
    let maLichChieu = this.props.match.params.maLichChieu;
    this.props.getListChair(maLichChieu);
  }
  handleCalMoney = (giaVe) => {
    // let { listChair } = this.props;
    // // let giaVe = listChair.giaVe;
     console.log(giaVe);
     
    // let mangGioHang = [];
    // mangGioHang.push(giaVe);
    // // // return mangGioHang.reduce((sum, i) => {
    // // //   return sum += i;
    // // // }, 0);

    // // return listChair.reduce((sum,item)=>{
    // //       return sum += item.giaVe
    // // }, 0)
    // return mangGioHang.reduce((sum, item) => {
    //   return sum += item
    // }, 0)
    
  };
  renderHTML = () => {
   
    
    let { listChair } = this.props;
    return listChair.map(item => {
      return (
        <button
          key={item.maGhe}
          className="chair"
          onClick={()=>{this.handleCalMoney(item.giaVe)}}
        >
          {item.tenGhe}
        </button>
      );
    });
  };
  render() {
    let { detailMovie } = this.props;
    return (
      <div>
        <h3 className="hihi">BookChair</h3>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">{this.renderHTML()}</div>
            <div className="col-sm-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td>{this.handleCalMoney()}</td>
                  </tr>
                  <tr>
                    <td>Phim</td>
                    <td>{detailMovie.tenPhim}</td>
                  </tr>
                  <tr>
                    <td>Địa chỉ</td>
                    <td>{detailMovie.diaChi}</td>
                  </tr>
                  <tr>
                    <td>Thời gian</td>
                    <td>
                      {detailMovie.ngayChieu}-{detailMovie.gioChieu}-
                      {detailMovie.tenRap}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listChair: state.movieReducer.listChair,
    detailMovie: state.movieReducer.detailMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListChair: maLichChieu => {
      dispatch(action.actGetListChairAPI(maLichChieu));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookChair);
