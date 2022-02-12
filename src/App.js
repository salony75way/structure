import React, { lazy, Suspense } from "react";
import {
  Redirect,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Splash from "./components/Splash";
import Error from "./pages/Error";
export default function Routes() {
  return (
    <Suspense fallback={<Splash />}>
      <Router>
        <MainLayout>
          <Switch>
            <Route
              exact
              path="/"
              component={lazy(() => import("./pages/Home"))}
            />
            <PrivateRoute
              path="/about"
              component={lazy(() => import("./pages/About"))}
            />
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </Suspense>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />
      }
    />
  );
};
