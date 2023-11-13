import React from "react";
import ProfilePic from "../../assets/image.png";
import Star from "../../assets/Star.png";
function Quote(){
    return(
    <div className="w-full h-auto px-10 md:px-40 lg:px-40 py-20 ">
    <div className="lg:p-[50px] p-[15px] bg-[#BFAFF2] lg:h-[450px] rounded-[20px] mt-[40px]">
     <div className="font-poppins text-[#2B2B2B] text-[24px] font-[600]">“Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”</div>
     <div className="flex flex-row space-x-[20px] mt-[50px]">
         <div className="">
            <img src={ProfilePic} alt="" className="rounded-[50%]"/>
        </div> 

        <div className="flex flex-col lg:flex-row gap-2">
            <p className="font-poppins text-[18px] text-[#2B2B2B] font-[400] mt-[10px]">Johnny Owens</p>
            <div className="flex flex-row space-x-[5px]">
            <img src={Star} alt="" className="w-[20px] h-[20px]"/>
            <img src={Star} alt="" className="w-[20px] h-[20px]"/>
            <img src={Star} alt="" className="w-[20px] h-[20px]"/>
            <img src={Star} alt="" className="w-[20px] h-[20px]"/>
            <img src={Star} alt="" className="w-[20px] h-[20px]"/>
            </div>
            
        </div>
     </div>
     </div>
    </div>
    )
}
export default Quote;