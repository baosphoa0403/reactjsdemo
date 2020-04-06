import React, { Component } from "react";
import {connect} from "react-redux";
import *as action from "../../redux/action/index";
class ThemNguoiDung extends Component {
  constructor(props){
      super(props);
      this.state = {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDt: "",
        maNhom: "",
        maLoaiNguoiDung: "",
      }
  }
  handleSubmit = (e)  => {
     e.preventDefault();
     this.props.addUser(this.state);
  }
  handleOnChange = (e) => {
      let {name, value} = e.target;
    //   console.log(name, value);
      this.setState({
          [name] : value
      });
      
  }
  render() {
    return (
      <div>
        <h3>them Người dùng</h3>
        <form className="container" onSubmit={this.handleSubmit}>
          <h3>Thêm người dùng</h3>
          <div className="form-group">
            <span>Tài khoản</span>
            <input className="form-control" name="taiKhoan" onChange={this.handleOnChange} />
          </div>
          <div className="form-group">
            <span>Mật khẩu</span>
            <input className="form-control" name="matKhau" onChange={this.handleOnChange}/>
          </div>
          <div className="form-group">
            <span>Họ tên</span>
            <input className="form-control" name="hoTen" onChange={this.handleOnChange}/>
          </div>
          <div className="form-group">
            <span>Email</span>
            <input className="form-control" name="email" onChange={this.handleOnChange}/>
          </div>
          <div className="form-group">
            <span>Số điện thoại</span>
            <input className="form-control" name="soDt" onChange={this.handleOnChange}/>
          </div>
          <div className="form-group">
            <span>Mã nhóm</span>
            <input className="form-control" name="maNhom" onChange={this.handleOnChange}/>
          </div>
          <div className="form-group">
            <span>Mã loại người dùng</span>
            <input className="form-control" name="maLoaiNguoiDung" onChange={this.handleOnChange}/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Thêm người dùng
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const  mapDispatchToProps = dispatch => {
    return {
        addUser: (user) => {
            dispatch(action.actThemNguoiDungAPI(user))
        }
    }
}
export default connect (null ,mapDispatchToProps)(ThemNguoiDung);
