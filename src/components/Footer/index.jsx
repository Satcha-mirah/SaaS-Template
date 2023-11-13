import React, { useState, useEffect } from "react";
import Copyright from "../../assets/copyright.png";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        if (email.includes("@") && email.includes(".")) {
            setError("");
        } else {
            setError("Please fill in your email.");
        }
    }, [email]);

    return (
        <div className="w-full h-auto px-10 md:px-40 lg:px-40 py-20 ">
            <hr className="w-full text-[#ffffff] opacity-[0.2] h-[1px] " />

            <h1 className="text-[#ffffff] font-poppins font-[600] text-[24px] mt-[30px] mb-2">
                Wallet
            </h1>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-14 w-full  text-md">
                <div className="flex text-left flex-col lg:flex-row items-center gap-3 mt-12">
                    <div className="flex items-center gap-3">
                        <img
                            src={Copyright}
                            alt="img"
                            className="h-[25px] w-[22px]"
                        />
                        <p className="font-[600] font-poppins   text-[#ffffff]">
                            Wallet 2022
                        </p>
                    </div>
                    <p className=" font-[600] font-poppins text-[#ffffff]">
                        Privacy policy
                    </p>
                    <p className=" font-[600] font-poppins text-[#ffffff]">
                        Cookies policy
                    </p>
                    <p className=" font-[600] font-poppins text-[#ffffff]">
                        Terms of use
                    </p>
                </div>
                <div className="">
                    <p className="text-[18px] font-[400] text-[#ffffff] font-poppins mb-6">
                        Updates right to your inbox
                    </p>
                    <div className="flex items-center gap-5">
                        <div className="">
                            <input
                                placeholder=""
                                type="text"
                                value={email}
                                className=" p-[20px] w-[100px] h-[50px] text-white rounded-[15px] bg-[#333333] placeholder-text-[#ffffff] font-[poppins] font-[400] text-[18px] opacity-[0.4]"
                                onChange={handleEmailChange}
                            />
                        </div>
                        <button
                            className=" rounded-[15px] bg-[#BFAff2] text-[#333] font-poppins font-400 text-[18px] px-10 py-4"
                            onSubmit={handleSubmit}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
