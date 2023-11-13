import React from "react";
import CardsIcon from "../../assets/Cards_icon.png";
import CoinIcon from "../../assets/Coin_icon.png";
import PurseIcon from "../../assets/Purse_icon.png";
function Features() {
    return (
        <div className="w-full h-auto px-10 md:px-40 lg:px-40 py-20 flex flex-col lg:flex-row gap-16">
            <div className="flex flex-col items-center justify-center w-full">
                <img src={CardsIcon} alt="img" className="w-[70px] h-[70px]" />
                <h1 className="font-poppins text-[18px] text-[#ffffff] font-[600] mt-[25px]">
                    Customizable card
                </h1>
                <p className="font-poppins text-[18px] text-[#ffffff] font-[400] opacity-[0.4] mt-[15px] w-[255px]">
                    Custom your own card for your exact incomes and expenses
                    needs.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center w-full">
                <img src={CoinIcon} alt="img" className="w-[70px] h-[70px]" />
                <h1 className="font-poppins text-[18px] text-[#ffffff] font-[600] mt-[25px]">
                    No payment fee
                </h1>
                <p className="font-poppins text-[18px] text-[#ffffff] font-[400] opacity-[0.4] mt-[15px] w-[255px]">
                    Transfer all your payment all over the world with no payment
                    fee.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center w-full">
                <img src={PurseIcon} alt="img" className="w-[70px] h-[70px]" />
                <h1 className="font-poppins text-[18px] text-[#ffffff] font-[600] mt-[25px]">
                    All in one place
                </h1>
                <p className="font-poppins text-[18px] text-[#ffffff] font-[400] opacity-[0.4] mt-[15px] w-[255px] flex items-center justify-center">
                    The right place to keep your credit and debit cards,
                    boarding passes & more.
                </p>
            </div>
        </div>
    );
}
export default Features;
