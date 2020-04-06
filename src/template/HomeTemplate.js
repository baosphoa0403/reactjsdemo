import { Route } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";
// tạo 1 component homelayout
const HomeLayout = props => {
  return (
    //   trả về HTML
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};
export default function HomeTemplate({ Component, ...props }) {
    // truyền vào 1 cái Component , ...props là giữ lại các default props

  return (
    <Route
      {...props}
      render={propsComponent => (
        <HomeLayout>
            {/* truyền vào những props khác  */}
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
