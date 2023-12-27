import React from 'react'
import videoBukavuChicks from '@/assets/video/videoBukavuChicks.mp4'
import { motion } from "framer-motion";
import Logo from '../Logo';

function ShowVideo() {
    return (
        <div className='flex justify-between'>
            <div
                className='shadow-lg rounded-lg relative flex-[80%]'>
                <video
                    style={{
                        left: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        backgroundBlendMode: "multiply"
                    }}
                    src={videoBukavuChicks} autoPlay muted className=' border block h-[500px] flex-[20%]'>
                </video>
                <motion.div
                    className='absolute top-0  left-0 w-[365px] bg-blue-700  text-white text-2xl flex justify-center items-center    bottom-0 lg:max-w-[60%] px-5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 0.5, x: 0 },
                    }}
                >
                    <p>
                        {`Poulailler de `} <Logo />
                    </p>
                </motion.div>

                <motion.div
                    className='absolute top-0 w-full right-0 w-full  hidden lg:flex sm:text-xl md: text-4xl  flex justify-center items-center    bottom-0 lg:max-w-[60%] px-5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <strong className=' block flex gap-2 flex-col  justify-center items-center'>
                        <p>
                            Chez
                        </p>
                        <p>
                            <Logo />
                        </p>
                        <p className='text-center'>
                            obtenez le meilleur prix des poulets, du miel etc
                        </p>
                    </strong>
                </motion.div>
            </div>
        </div>
    )
}

export default ShowVideo
