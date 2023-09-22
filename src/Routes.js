import React from "react";

import App from "./pages/App";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import CarsPage from "./pages/CarsPage";
import CarPage from "./pages/CarPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";



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
        path: '/pages/cars',
        exact: true
      },
      {
        ...CarPage,
        path: '/pages/cars/model'
      },
      {
        ...Signup,
        path: '/pages/auth/signup'
      },
      {
        ...Signin,
        path: '/pages/auth/signin'
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