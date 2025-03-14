import React from "react";
import Navbar from "../Navbar";
import Header from "./Header";
import Footer from "./Footer";
import HowItWorks from "./HowItWorks";
import TrustedBy from "./TrustedBy";


export default function Full() {
    return (
        <div className="w-full  h-full  space-y-34 sm:space-y-14">
            <Navbar/>
            <Header/>
            <TrustedBy/>
            <HowItWorks/>
            <Footer/>
            

        </div>
    );
}
