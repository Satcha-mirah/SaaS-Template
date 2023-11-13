import React from "react";
import Logo from "../../assets/Logos.png";
function Logos() {
    return (
        <div className="w-full h-auto px-10 md:px-40 lg:px-40 py-20 ">
            <hr className="w-full text-[#ffffff] opacity-[0.2] h-[1px] " />
            <img src={Logo} alt="img" className="pb-[40px] pt-[50px]" />
            <hr className="w-full text-[#ffffff] opacity-[0.2] h-[1px] " />
        </div>
    );
}
export default Logos;
