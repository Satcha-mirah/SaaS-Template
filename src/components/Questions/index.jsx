import React from "react";
import QuestionImage from "../../assets/GIF.png";
function Question(){
    return(
        <div className="w-full h-auto px-10 md:px-40 lg:px-40 py-20 ">
        <div className="w-full mt-20 flex flex-col lg:flex-row justify-between items-center gap-[100px]">
            <div className="w-full lg:w-[50%] text-center lg:text-left">
                <h1 className="font-[600] w-full lg:w-[400px] text-[#ffffff] font-poppins lg:text-[60px] text-[40px] lg:text-start text-center">
                   Questions? Let's talk
                </h1>
                <p className="font-[400] font-poppins text-[18px] text-[#ffffff] opacity-[0.4] mt-[14px]">
                    Contact us through our 24/7 live chat. We're always ready to help!
                </p>
                <button className="w-[170px] h-[50px] rounded-[15px] bg-[#F8D57E] text-[#333] font-poppins font-400 text-[18px] mt-[50px]">
                    Get Started
                </button>
            </div>

            <div className="w-full lg:w-[50%]">
                <img src={QuestionImage} alt="img" className="w-full" />
            </div>
        </div>
    </div>
    )
}
export default Question;