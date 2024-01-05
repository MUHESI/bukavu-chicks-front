import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { footerLinks } from "./data";
import { IFooterLinks } from "@/types";
import Logo from "../Logo";
import { shopsData } from "../constants";
import { MdShoppingCartCheckout } from "react-icons/md";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer className="bg-primary-100 py-10">
            <div className="justify-content mx-auto w-5/6 gap-16 flex flex-wrap ">
                <div className="mt-16 basis-1/3 md:mt-0 grow">
                    <Logo />
                    <p className="my-5">
                        Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                        purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                        orci ut habitant laoreet. Iaculis tristique.
                    </p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0 grow">
                    <h4 className="font-bold">Liens importants</h4>
                    {footerLinks.map((item: IFooterLinks, key: number) =>
                        <p key={key} className="my-2  flex  items-center gap-2 cursor-pointer hover:text-white transition-100" onClick={() => navigate(item.path)}>
                            <span><FaChevronRight size={13} /></span>
                            <span>{item.label}</span>
                        </p>
                    )}
                </div>
                <div className="mt-16 grow md:mt-0">
                    <h4 className="font-bold">Nos shops</h4>
                    {shopsData.map((item: any, key: number) =>
                        <>
                            {key < 3 &&
                                <p key={key} className="my-2  flex  items-center gap-2" onClick={() => navigate(item.path)}>
                                    <span><MdShoppingCartCheckout size={13} /></span>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="cursor-pointer hover:text-white transition-100">{item.name}</span>
                                        <span className="text-secondary-100 font-bold cursor-pointer hover:underline transition-100">{key === 2 && "voir plus"}</span>
                                    </div>
                                </p>

                            }

                        </>
                    )}
                </div>
            </div>
            <div className="border-t  border-secondary-100 mx-2 flex justify-center md:justify-between  gap-5 py-5 px-5 items-center flex-wrap">

                {/* -- */}
                <p className="flex gap-2">
                    {[
                        <FaFacebook size={20} />,
                        <FaLinkedin size={20} />,
                        < IoLogoWhatsapp size={20} />,
                        <FaTelegram size={20} />
                    ].map((item) => <span className="cursor-pointer  hover:text-white transition-100 ">{item}</span>)}
                </p>
                <p className=" flex gap-2">
                    {[
                        <IoLogoAndroid size={22} />,
                        <FaApple size={22} />,
                    ].map((item) => <span className="cursor-pointer  hover:text-white transition-100 ">{item}</span>)}
                </p>
                <p className="flex gap-3 font-bold">© 2024 Copyright: Renovaa</p>

            </div>
        </footer>
    );
};

export default Footer;
