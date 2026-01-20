import { createBrowserRouter } from "react-router";
import App from "../App";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,  
        children: [ 
            {
                index: true,
                element: <div>Hello</div>  
            },
            {
                path: 'ami',
                element: <div>Irfan</div> 
            }
        ]
    }
]);

export default router;