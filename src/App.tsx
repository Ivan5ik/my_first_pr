import React from "react";
import "./App.css";
import moment from "moment";
import Header from "./components/Header";
import { routesAbove, routesBottom, routesMiddleAbove } from "./routes/routes";
import { Route } from "./routes";
// import { Layout } from "antd";

function App() {
  console.log(moment().format("dddd"));

  return (
    // <Layout className="layout">
    <div>
      <Header routes={routesBottom} routesAbove={routesAbove} />
      <Route
        routes={routesBottom}
        routesAbove={routesAbove}
        routesMiddleAbove={routesMiddleAbove}
      />
      {/* <img src="ff.jpg" alt="Taras" /> */}
    </div>
    // </Layout>
  );
}

export default App;
