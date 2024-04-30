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
                loader:()=>fetch('https://wander-asia-adventures-server.vercel.app/tourism')
            },
            {
                path:'/tourism/:id',
                element:<HomeTourismDetails/>,
                loader:({params})=>fetch(`https://wander-asia-adventures-server.vercel.app/tourism/${params.id}`)
            },
            {
                path:'/addTouristSpot',
                element:<ProtecRoute><AddTouristSpot/></ProtecRoute>,
            },
            {
                path:'/uploadedData',
                element:<AllTouristSpot/>,
                loader:()=>fetch('https://wander-asia-adventures-server.vercel.app/uploadData')

            },
            {
                path:`/tourSingleDetails/:id`,
                element:<ProtecRoute><ShowSingleTourCard/></ProtecRoute>,
                loader:({params})=>fetch(`https://wander-asia-adventures-server.vercel.app/tourSingleDetails/${params.id}`)

            },
            {
                path:'/myData/:email',
                element:<ProtecRoute><MyTourUpload></MyTourUpload></ProtecRoute>,
                loader:({params})=>fetch(`https://wander-asia-adventures-server.vercel.app/myData/${params?.email}`)
            },
         {
                path:'/update/:id',
                element:<ProtecRoute><UpdateUploadData/></ProtecRoute>,
                loader:({params})=>fetch(`https://wander-asia-adventures-server.vercel.app/update/${params.id}`)
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