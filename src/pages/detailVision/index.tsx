import React from 'react'
import Logo from '@/components/Logo'
import { URL_MEDIA } from '@/components/constants'
import { motion } from "framer-motion";
import { HText } from '@/components/core/heading';
import CustomizedTimeline from './TimeLine'

function DetailVision() {
    return (
        <div>
            <motion.div
                className="relative md:mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div className=' w-full min-h-[350px] mt-20 rounded'
                    style={{
                        backgroundImage: `url(${URL_MEDIA.CHICKENS_IMAGE})`,
                        backgroundColor: "rgba(0, 0, 0, 0.21)",
                        backgroundBlendMode: "multiply",
                        backgroundSize: "cover"
                    }}>
                </div>
                <div className='border rounded-l-full absolute bottom-0 right-0 p-2 min-w-[100px] text-white  bg-opacity-50 bg-black'>
                    <Logo />
                </div>
            </motion.div>
            <div className='p-5 text-justify'>
                <HText>Notre vision</HText>
                <CustomizedTimeline />
            </div>
        </div>
    )
}

export default DetailVision
