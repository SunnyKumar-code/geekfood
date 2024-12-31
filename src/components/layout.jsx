import Quote from "../quote/quote"
import Resturants from "../Resturants/resturants"
import Footer from "./Footer/footer"
import Header from "./Header/header"
import Home from "./home/home"
import { Outlet } from "react-router-dom"

const Layout = ()=>{
    return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    )
}
export default Layout