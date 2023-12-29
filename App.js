import React from "react";
import  ReactDOM  from "react-dom/client";


const Header=()=>{
    return(
        <div className="header">
        <div className="logo">
            <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large"></img>

        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Orders</li>
            </ul>
        </div>

    </div>
    
    )
}

const AppLayout=()=>{
    return(
        <>
        <Header/>
        </>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);