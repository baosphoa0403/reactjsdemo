import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import ListMovie from "./pages/ListMovie";
import PageNotFound from "./pages/PageNotFound";
import { routesHome, routesAdmin } from "./routes";
import Admin from "./pages/admin/Admin"
import HomeTemplate from "./template/HomeTemplate";
import AdminTemplate from "./template/AdminTemplate";
import HOOK from "./HOOKS";
// chia lại thành 2 trang khác nhau 
// 1 là trang Home , 2 là trang admin
function App() {
  const showMenuHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showMenuAdmin = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showMenuHome(routesHome)}
           {showMenuAdmin(routesAdmin)}
          <Route path="/admin" component={Admin}/>
          {/* Trang Home */}
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route path="/home" component={Home} /> */}
          {/* Trang About - localhost:3000/about */}
          {/* <Route path="/about" component={About} /> */}
          {/* Trang ListMovie - localhost:3000/list-movie */}
          {/* <Route path="/list-movie" component={ListMovie} /> */}
          {/* Link không xác định - để cuối cùng các trang */}
          <Route path="/demo-hook" component={HOOK}/>
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
