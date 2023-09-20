import React from "react";

import App from "./pages/App";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import CarsPage from "./pages/CarsPage";
import CarPage from "./pages/CarPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";



const routes = [
  {

...App,
routes: [
 
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...ExplorePage,
        path: '/pages/explore'
      },
      {
        ...CarsPage,
        path: '/pages/cars'
      },
      {
        ...ContactPage,
        path: '/pages/contact'
      },
      {
        ...AboutPage,
        path: '/pages/about'
      }
    ]
  }
]



export default routes;