import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Categry/Category";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.id}`)
                },
                element: <Category></Category>
            },
            {
                path: 'news/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <News></News>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }

])