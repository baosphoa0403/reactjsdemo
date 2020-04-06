import React, { Component } from "react";
import {connect} from "react-redux";
import * as action from "../../redux/action/index";
class Admin extends Component {
  constructor(props)  {
      super(props);
      this.state = {
          taiKhoan: "",
          matKhau:""
      }

  }
  handleLogin = (e) => {
      e.preventDefault();
      // console.log(this.props.history);
      // console.log(this.state);
      
      this.props.loginAdmin(this.state, this.props.history);
      // console.log(this.state);
      
  };
  handleOnChange = (e) => {
      let {name, value} = e.target;
      console.log(name, value);
     this.setState({
       [name]: value
     })
  };

  render() {
    return (
      <div>
        <h3>Admin</h3>
        <div className="container">
          <div className="col-sm-6">
            <form onSubmit={this.handleLogin}>
              <div className="form-group">
                <label>UserName</label>
                <input
                  type="text"
                  name="taiKhoan"
                  onChange={this.handleOnChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  name="matKhau"
                  onChange={this.handleOnChange}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-danger">
                  Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
      loginAdmin: (data, history) => {
        // console.log(data);
        
        dispatch(action.actLoginAdmin(data, history))
      }
    }
}

export default connect(null, mapDispatchToProps)(Admin);
// 123@admin
// 123