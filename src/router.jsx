import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Componenet/Page-Component/MainLayout";
import ErrorPage from "./Componenet/Shared-Componenet/ErrorPage";
import Home from "./Componenet/Page-Component/Home";
import Login from "./Componenet/AuthComponent/Login";
import Singing from "./Componenet/AuthComponent/Singing";
import HomeTourismDetails from "./Componenet/Page-Component/HomeTourismDetails";
import AddTouristSpot from "./UserComponent/AddTouristSpot";
import AllTouristSpot from "./UserComponent/AllTouristSpot";
import ShowSingleTourCard from "./UserComponent/ShowSingleTourCard";
import ProtecRoute from "./Componenet/AuthComponent/ProtecRoute";
import MyTourUpload from "./UserComponent/MyTourUpload";
import UpdateUploadData from "./UserComponent/UpdateUploadData";

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
                path:'/addTouristSpot',
                element:<ProtecRoute><AddTouristSpot/></ProtecRoute>,
            },
            {
                path:'/uploadedData',
                element:<AllTouristSpot/>,
                loader:()=>fetch('http://localhost:5500/uploadData')

            },
            {
                path:`/tourSingleDetails/:id`,
                element:<ProtecRoute><ShowSingleTourCard/></ProtecRoute>,
                loader:({params})=>fetch(`http://localhost:5500/tourSingleDetails/${params.id}`)
            },
            {
                path:'/myData/:email',
                element:<ProtecRoute><MyTourUpload></MyTourUpload></ProtecRoute>,
                loader:({params})=>fetch(`http://localhost:5500/myData/${params?.email}`)
            },
            {
                path:'/update/:id',
                element:<ProtecRoute><UpdateUploadData/></ProtecRoute>,
                loader:({params})=>fetch(`http://localhost:5500/update/${params.id}`)
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