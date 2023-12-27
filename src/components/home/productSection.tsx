import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ButtonCustom from "@/components/core/buttonCustom";
import { HText } from "../core/heading";
import Logo from "../Logo";

const Products = () => {
    const navigate = useNavigate()
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div>
                <motion.div
                    className="md:my-2 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>NOS PRODUITS </HText>
                    <p className="my-5 text-sm">
                        Chez <Logo />  nous vous offrons tout une gamme des produits et les services, Vous trouverez tous nos  produits en cliquant sur voir plus :
                    </p>
                </motion.div>
                <div className='flex  justify-center  py-2  px-2'>
                    <ButtonCustom
                        className='bg-secondary-100 hover:bg-transparent'
                        label='Lire plus'
                        onClick={() => navigate('/products')}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Products;