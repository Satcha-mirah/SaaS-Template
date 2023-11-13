import React, {useState} from "react";
import menuIcon from "../../assets/Svg/menu.svg";
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }
   

    return (
        <div className="w-full px-10 py-6 flex items-center justify-between z-10 fixed bg-black">
            <div className="text-[#ffffff] font-poppins font-[600] text-[24px] ">
                Wallet
            </div>
            <div className="block sm:hidden md:hidden lg:hidden">
              <img src={menuIcon} alt="" className="w-[36px] h-[36px] text-[#ffffff]"/>  
            <div className="hidden sm:block md:block lg:block space-x-[20px]">
                <a
                    href=""
                    className="text-[#ffffff] font-poppins font-[400] text-[18px]"
                >
                    Sign up
                </a>
                <button className="w-[170px] h-[50px] rounded-[15px] bg-[#BFAFF2] text-[#333] text-[18px]">
                    Log in
                </button>
            </div>
            </div>
            
        </div>
    );
}

export default Navbar;
