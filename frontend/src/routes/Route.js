import MainRoot from "../components/MainRoot";
import About from "../pages/About";
import Add from "../pages/Add";
import Contacts from "../pages/Contacts";
import Home from "../pages/Home/Home";
import Portfolio from "../pages/Portfolio";
import Pricing from "../pages/Pricing";

export const ROUTES = [
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"portfolio",
                element:<Portfolio/>
            },
            {
                path:"pricing",
                element:<Pricing/>
            },
            {
                path:"contact",
                element:<Contacts/>
            },
            {
                path:"add",
                element:<Add/> 
            }
        ]
    }
];