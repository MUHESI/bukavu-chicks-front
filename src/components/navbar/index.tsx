import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import NavbarMenu from "./NavbarMenu";
import { datLinksPartners, datLinksProducts, datLinksShop } from "./data";
import { FaCartShopping } from "react-icons/fa6";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const navigate = useNavigate()
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav className="text-white font-bold">
      <div
        className={`shadow bg-primary-100 ${flexBetween} fixed top-0 z-30 w-full py-5`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <button onClick={() => navigate('/')}
              title='Home'
            >
              <Logo />
            </button>

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} `}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    link="/"
                    page="Accueil"
                    selectedPage={selectedPage}
                  />
                  {/* <Link
                    link="/shop"
                    page="Commander"
                    selectedPage={selectedPage}
                  /> */}

                  <NavbarMenu isTopOfPage={isTopOfPage} mainTitle="Produits" links={datLinksProducts} />
                  <NavbarMenu isTopOfPage={isTopOfPage} mainTitle="Partenariants" links={datLinksPartners} />
                  <NavbarMenu isTopOfPage={isTopOfPage} mainTitle="Shop" links={datLinksShop} />
                  {/* <span
                    className={`cursor-pointer text-primary-500 transition duration-500 hover:text-primary-300 `}
                    onClick={() => navigate('/')}
                  >
                    Hello, MUHESI
                  </span> */}
                </div>
                <div className={` ml-10 flex justify-end gap-8`}>
                  <button className=""
                    onClick={() => navigate('/list-command')}
                  >
                    <FaCartShopping
                      size={20}
                      style={{
                        fontFamily: "bold"
                      }}
                      className="text-secondary-100 font-bold"
                    />
                  </button>

                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div
            // onClick={() => setIsMenuToggled(!isMenuToggled)}
            className="  flex flex-col gap-12 items-center "
          >
            <Link
              page="Accueil"
              link="/"
              selectedPage={selectedPage}
            />
            <NavbarMenu isTopOfPage={isTopOfPage} mainTitle="Shop" links={datLinksShop} onClick={() => setIsMenuToggled(!isMenuToggled)} />
            <NavbarMenu isTopOfPage={isTopOfPage} mainTitle="Produits" links={datLinksProducts} onClick={() => setIsMenuToggled(!isMenuToggled)} />
            <NavbarMenu isTopOfPage={isTopOfPage} mainTitle="Partenariants" links={datLinksPartners} onClick={() => setIsMenuToggled(!isMenuToggled)} />
            <NavbarMenu isTopOfPage={isTopOfPage} mainTitle="Shop" links={datLinksShop} onClick={() => setIsMenuToggled(!isMenuToggled)} />
          </div>
          <div className={`mt-10 flex justify-center gap-8`}>
            <button className=""
              onClick={() => navigate('/list-command')}
            >
              <FiShoppingCart />
            </button>

          </div>
        </div>
      )
      }
    </nav >
  );
};

export default Navbar;
