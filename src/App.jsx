import Footer from "./components/Footer/footer"
import Header from "./components/Header/header"
import Home from "./components/home/home"
import Layout from "./components/layout"
import Quote from "./quote/quote"
import Resturants from "./Resturants/resturants"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
function App() {
        const router = createBrowserRouter([
                {
                        element:<Layout/>,
                        children:[

                                {
                                        path:"/",
                                        element:<Home/>
                                },
                                {
                                        path:"/quote",
                                        element:<Quote/>
                                },
                                {
                                        path:"/resturants",
                                        element:<Resturants/>
                
                                }
                        ]
                },

        ])
return (<div>
   <RouterProvider router={router}/>
</div>
)}

export default App
