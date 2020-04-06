import Axios from "axios";
import * as ActionType from "./../constants/ActionType";
// async action
// lấy danh sách phim
export const actGetListMovieAPI = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    })
      .then(rs => {
        // console.log(rs);
        dispatch(actGetListMovie(rs.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
// lấy chi tiết phim
export const actGetDetailMovieAPI = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
    })
      .then(rs => {
          dispatch(actGetDetailMovie(rs.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// lấy danh sách ghế phim
export const actGetListChairAPI = maLichChieu => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu} `
    })
      .then(rs => {
        // console.log(rs.data);
        dispatch(actGetListChair(rs.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// login
export const actLoginAdmin = (data, history) => { 
  // console.log(data, history);
  return dispatch => {
    Axios({
      method:"POST",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      data: data
    })
    .then(rs => {
      // console.log(rs.data);
      if(rs.data.maLoaiNguoiDung === "QuanTri"){
        history.push("/admin/dashbroad");
        localStorage.setItem("userAdmin", JSON.stringify(rs.data));
      }else {
        alert("Bạn không có quyền truy cập")
      }
    
    })
    .catch(err => {console.log(err);
    })
  }
}

export const actThemNguoiDungAPI = (user) => {
  const userAdmin  = JSON.parse(localStorage.getItem("userAdmin"))
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: user,
      headers: {
        Authorization: `Bearer ${userAdmin.accessToken}`
      }
    })
    .then(rs=>{console.log(rs.data);
    })
    .catch(err => {
      alert(err.response.data);
      console.log(err);
  })
  }
}



export const actGetListMovie = listMovie => {
  // trả về cục object
  return {
    type: ActionType.GET_LIST_MOVIE,
    data: listMovie
  };
};

export const actGetDetailMovie = detailMovie => {
  return {
    type: ActionType.GET_DETAIL_MOVIE,
    data: detailMovie
  };
};

export const actGetListChair = listChair => {
  return {
    type: ActionType.GET_LIST_CHAIR,
    data: listChair
  };
};

