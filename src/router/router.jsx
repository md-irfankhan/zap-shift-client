import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home/Home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,  
        children: [ 
            {
                index: true,
                Component:Home  
            },
            {
                path: 'ami',
                element: <div>Irfan</div> 
            }
        ]
    }
]);

export default router;