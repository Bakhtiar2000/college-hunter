import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Login/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Colleges from './Pages/Colleges/Colleges.jsx';
import Admission from './Pages/Admission/Admission.jsx';
import MyColleges from './Pages/MyColleges/MyColleges.jsx';
import Profile from './Pages/Profile/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/colleges',
        element: <Colleges></Colleges>
      },
      {
        path: '/admissions',
        element: <Admission></Admission>
      },
      {
        path: '/myColleges',
        element: <MyColleges></MyColleges>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
