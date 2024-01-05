import React from 'react'
import { HText } from '../core/heading'
import { useNavigate } from 'react-router-dom'
import { URL_MEDIA, shopsData } from '../constants'
import { CgChevronDoubleRight } from "react-icons/cg";
import { motion } from "framer-motion";
import Logo from '../Logo';


function OurVision() {
    const navigate = useNavigate()
    return (
        <div className='p-5 pb-16  my-10 rounded-xl mb-20'>
            <div className='text-center'>
                <HText>Notre vision</HText>
                <p className='my-2  mx-auto max-w-[650px]' >
                    Notre vision chez BUKAVU Chicks, nous vous offrons tout une gamme des produits et les services, Vous trouverez les produits comme , hjdcu cdoiclkvdsudi udsiop
                </p>
            </div>
            <main className='flex items-center gap-2'>
                <div className='h-[1px] bg-primary-100 flex-[1%] hidden sm:flex'>

                </div>
                <h5 className=' pb-1 '>Livraison rapide</h5>
                <div className=' flex-[50%] sm:flex-[60%] md:flex-[70%] grow h-[1px] bg-primary-100'>

                </div>
            </main>

            <div className='relative w-[100%] min-h-[350px]'
                style={{
                    backgroundImage: `url(${URL_MEDIA.TEAM_IMAGE})`,
                    backgroundColor: "rgba(0, 0, 0, 0.35)",
                    backgroundSize: "cover",
                    backgroundBlendMode: "multiply"
                }}
            >
                <div
                    className='w-full '
                    style={{
                        position: "absolute",
                        bottom: 0

                    }}
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className=' py-auto bg-black bg-opacity-[0.7] p-2  px-5 w-full flex items-center gap-5'>
                            <section>
                                <h5 className='border-b-[1px] max-w-max mb-3 text-primary-100 font-bold border-primary-100   '>Explorez nos boutiques</h5>
                                {/* <div className='flex ml-10 mt-2 py-2 px-1'>
                            <ButtonCustom
                                className='bg-secondary-100 hover:bg-transparent hover:text-white'
                                label='Lire plus'
                                onClick={() => navigate('/detailVision')}
                            />
                        </div> */}

                                {shopsData.map((item, key) => <p className='flex items-center gap-1 text-white px-2 my-1 text-sm hover:text-primary-100 cursor-pointer transition-all max-w-max'> <CgChevronDoubleRight size={15} /> {item.name}  </p>)}
                            </section>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 1 }}
                                variants={{
                                    hidden: { opacity: 0, x: 500 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >

                                <section className='text-2xl flex gap-2'>
                                    <Logo />
                                    <span className='text-white'>, unique à son genre.</span>
                                </section>
                            </motion.div>


                        </div>

                    </motion.div>

                </div>
            </div>


        </div >
    )
}

export default OurVision



