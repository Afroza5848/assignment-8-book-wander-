import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";


const Root = () => {
    return (
        <div className="container mx-auto px-2">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;