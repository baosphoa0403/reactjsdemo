import React from "react";
import { Route } from "react-router-dom";
// là 1 comdponent layout
const AdminLayout = props => {
  return (
    <div>
      <h3>NavBar ADMIN</h3>
      {props.children}
    </div>
  );
};
export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => (
        <AdminLayout>
          {/* truyền vào những props khác  */}
          <Component {...propsComponent} />
        </AdminLayout>
      )}
    />
  );
}
