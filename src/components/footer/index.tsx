import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { footerLinks } from "./data";
import { IFooterLinks } from "@/types";
import Logo from "../Logo";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <Logo />
                    <p className="my-5">
                        Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                        purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                        orci ut habitant laoreet. Iaculis tristique.
                    </p>
                    <p className="flex gap-3">© All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Liens importants</h4>
                    {footerLinks.map((item: IFooterLinks, key: number) =>
                        <p key={key} className="my-2  flex  items-center gap-2 cursor-pointer hover:text-white transition-100" onClick={() => navigate(item.path)}>
                            <span><FaChevronRight size={13} /></span>
                            <span>{item.label}</span>
                        </p>
                    )}
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold"> Sociaux & Contact</h4>
                    <p className="my-4 flex gap-2">
                        {[
                            <FaFacebook />,
                            <FaLinkedin />,
                            < IoLogoWhatsapp />,
                            <FaTelegram />
                        ].map((item) => <span className="cursor-pointer  hover:text-white transition-100 ">{item}</span>)}
                    </p>
                    <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                    <p>+243 998 799 000</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
