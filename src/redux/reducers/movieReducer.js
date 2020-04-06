import * as ActionType from "./../constants/ActionType";

let initialState = {
  listMovie: [],
  detailMovie: {},
  listChair: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE:
      // console.log(action.data);
      state.listMovie = action.data;
      return { ...state };
    case ActionType.GET_DETAIL_MOVIE:
      state.detailMovie = action.data;
      // console.log(action.data);
      return { ...state };
    case ActionType.GET_LIST_CHAIR:
      state.detailMovie = action.data.thongTinPhim;
      state.listChair = action.data.danhSachGhe;
      // console.log(action.data);
      return { ...state };
    default:
      return { ...state };
  }
};

export default movieReducer;
