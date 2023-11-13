import React from "react";
import ProductImg from "../../assets/Svg/Image.svg";
function BigImage() {
    return (
        <div className="w-full h-auto px-10 md:px-40 lg:px-40 py-20 ">
            <div className="w-full bg-[#ffffff] rounded-[20px] lg:px-[150px] lg:pt-[50px]">
                <img src={ProductImg} alt="img" className="w-full" />
            </div>
        </div>
    );
}
export default BigImage;
