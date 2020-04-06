import Home from "./pages/Home";
import About from "./pages/About";
import ListMovie from "./pages/ListMovie";
import Detail from "./pages/Detail";
import BookChair from "./pages/BookChair";
import HOC from "./HOC/index";
import Dashbroad from "./pages/admin/Dashbroad";
import ThemNguoiDung from "./pages/admin/ThemNguoiDung";
const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/home",
    exact: false,
    component: Home
  },
  {
    path: "/about",
    exact: false,
    component: About
  },
  {
    path: "/list-movie",
    exact: false,
    component: ListMovie
  },
  {
    path: "/detail/:id",
    exact: false,
    component: Detail
  },
  {
    path: "/book-chair/:maLichChieu", 
    exact: false,
    component: BookChair
  },
  {
    path: "/hoc",
    exact: false,
    component: HOC
  }
];
const routesAdmin = [
  {
    path: "/admin/dashbroad",
    exact: false,
    component: Dashbroad
  },
  {
    path: "/admin/them-nguoi-dung",
    exact: false,
    component: ThemNguoiDung
  },
]

export { routesHome, routesAdmin };
