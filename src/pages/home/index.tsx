import Carousel from "@/components/home/carouselSection";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import ArrowImg from "@/assets/Sparkles.png";
import HomePageTwoChickens from "@/assets/twoChickens.png";
import Logo from "@/components/Logo";
import OurVision from "@/components/home/ourVisionSection";
import Resume from "@/components/home/Resume";
import Products from "@/components/home/productSection";
import ShowVideo from "@/components/home/ShowVideoSection";

const HomePage = () => {
    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* CAROUSEL*/}
            <section>
                <Carousel />
            </section>
            <section>
                <motion.div
                    className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
                >
                    {/* MAIN HEADER */}
                    <div className="z-10 mt-32 md:basis-3/5">
                        <motion.div
                            className="md:-mt-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div className="relative">
                                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                    <span className="text-3xl">
                                        Chaque chose est bon avec
                                        <p className=" ml-10  md:text-5xl font-bold">
                                            <Logo />
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <p className="mt-8 text-sm">
                                Vous avez besoin des poulets, des viandes tout , commandez des maintenant :
                                pour vos différents événements : fêtes de mariages , réunions ,
                                nous serons heureux de vous  faire plaisir.
                            </p>
                            <AnchorLink
                                className="flex justify-end  text-sm font-bold text-primary-500 underline  hover:text-secondary-500"
                                href={`#`}
                            >
                                <p>Lire plus</p>
                            </AnchorLink>
                        </motion.div>
                    </div>
                    <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                        <img className="w-[900px]"
                            alt="home-pageGraphic" src={HomePageTwoChickens} />
                        <img className="w-[500px] "
                            style={{
                                transform: 'translate(-50%, -20%)',
                            }}
                            alt="..." src={ArrowImg} />
                    </div>
                </motion.div>
            </section>
            <section>
                <OurVision />
            </section>
            <section>
                <Resume />
            </section>
            <section>
                <Products />
            </section>
            <section className="hidden md:block transition">
                <ShowVideo />
            </section>
        </section>
    );
};
export default HomePage;
