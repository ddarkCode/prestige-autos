import React from "react";
import {renderRoutes} from 'react-router-config';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const App = ({route}) => {
  return (
    <div>
      <Header/>
      {renderRoutes(route.routes)}
      <Footer/>
    </div>
  )
}

export default {component: App };