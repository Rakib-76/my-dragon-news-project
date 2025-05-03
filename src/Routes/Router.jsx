import {
    createBrowserRouter,
} from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Categories from "../Pages/categories";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import LoginLayout from "../layouts/LoginLayout";
const Router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                element: <Categories></Categories>,
                loader: ()=> fetch("/public/news.json")
                   
            },
        ]
    },
    {
        path: "/auth",
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path: "/news",
        element: <h2>News Layout</h2>
    },
    {
        path: "/*",
        element: <h2>error</h2>
    },

]);
export default Router;
