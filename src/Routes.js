import React from "react";

import App from "./pages/App";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import CarsPage from "./pages/CarsPage";
import CarModelPage from "./pages/CarModelPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import AddCarPage from "./pages/AddCarPage";
import UserPage from "./pages/UserPage";



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
       
      },
      {
        ...AddCarPage,
        path: '/pages/new/new-car',
        exact: true
      },
      {
        ...CarModelPage,
        path: '/pages/brand/:carId',
       
      },
      {
        ...Signup,
        path: '/pages/auth/register',
        exact: true
      },
      {
        ...Signin,
        path: '/pages/auth/login',
        exact: true
      },
      {
        ...UserPage,
        path: '/pages/auth/user',
        exact: true
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