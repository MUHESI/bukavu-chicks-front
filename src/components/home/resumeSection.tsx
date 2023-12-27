import React from 'react'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import ButtonCustom from '../core/buttonCustom';

function Resume() {
    return (
        <div className=" shadow rounded  bg-primary-100 ">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <h2 className='text-center text-2xl font-bold py-2'>Ce que nous faisons </h2>
                {[1, 2, 4, 5].map((item, key) => <div className="my-4 bg-primary-100 p-2 px-5 flex items-center gap-2 border-b border-secondary-500 hover:shadow-md hover:scale-[1.03] transition" >
                    <IoCheckmarkDoneCircleOutline size={55} />
                    <p>
                        @Renovaa consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Renovaa.
                        fames vitae vulputate @Renovaa.
                    </p>
                </div>)

                }
                <div className='flex justify-end mb-5 py-2  px-2'>
                    <ButtonCustom
                        label='Lire plus'
                        onClick={() => console.clear()} // TODO: add link
                    />
                </div>
            </motion.div>

        </div>
    )
}

export default Resume
