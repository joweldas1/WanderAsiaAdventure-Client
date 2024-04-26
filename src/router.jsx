import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Componenet/Page-Component/MainLayout";
import ErrorPage from "./Componenet/Shared-Componenet/ErrorPage";
import Home from "./Componenet/Page-Component/Home";
import Login from "./Componenet/AuthComponent/Login";
import Singing from "./Componenet/AuthComponent/Singing";
import HomeTourismDetails from "./Componenet/Page-Component/HomeTourismDetails";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>  ,
        errorElement:<ErrorPage/>  ,
        children:[
            {
                path:'/',
                element: <Home/>  ,
                loader:()=>fetch('http://localhost:5500/tourism')
            },
            {
                path:'/tourism/:id',
                element:<HomeTourismDetails/>,
                loader:({params})=>fetch(`http://localhost:5500/tourism/${params.id}`)
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/singing',
                element:<Singing/>
            }
        ]
    }
])

export default router