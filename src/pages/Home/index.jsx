import React from "react";
import Navbar from "../../components/Navbar";
import LPT from "../../components/LPT";
import Logos from "../../components/Logos";
import BigImage from "../../components/Big-Image";
import Features from "../../components/Features";
import Quote from "../../components/Quote";
import Question from "../../components/Questions";
import Footer from "../../components/Footer";
function Home() {
    return (
        <div className="bg-[#2B2B2B] w-full ">
            <Navbar />
            <LPT />
            <Logos />
            <BigImage />
            <Features />
            <Quote />
            <Question />
            <Footer /> 
        </div>
    );
}
export default Home;
