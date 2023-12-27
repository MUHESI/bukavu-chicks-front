import React, { useState } from 'react'
import { MdOutlineStarRate } from "react-icons/md";
import { motion } from "framer-motion";
import { MdOutlineAddShoppingCart } from "react-icons/md"
import BasketCard from '@/components/market/basketCard';
import { dataCards } from '@/components/constants';
import DialogCustom from '@/components/core/dialogCustom';
import ImageCustom from '@/components/core/imageCustom';

function Market() {
    return (
        <div className="p-5 gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div className='mt-5 mb-4 px-4'>
                    <Select />
                </div>
                <div className='flex gap-5 flex-wrap  justify-center'>
                    {dataCards.map((item, key) =>
                        <div key={key}
                            className='cursor-pointer  border  rounded-xl  flex-grow p-5 transition shadow hover:shadow-lg '>
                            <div className='flex justify-center'>
                                <ImageCustom src={item.img} className='w-[200px]  rounded-md' />
                            </div>
                            <div className='my-2 text-center'>
                                <h5>{item.name} </h5>
                            </div>
                            <div className='cursor-pointer flex justify-center text-secondary-100'>
                                <MdOutlineStarRate />
                                <MdOutlineStarRate />
                                <MdOutlineStarRate />
                            </div>
                            <p className='text-sm text-center'> 2 reviews</p>
                            <div className=' flex justify-center items-center gap-3  text-center'>
                                <strong className='font-bold'>${item.prices.smallPrice}</strong>
                                <DialogCustom
                                    lastBtnOptions={
                                        {
                                            btnText: "Valider",
                                            closeAfterAction: true,
                                        }
                                    }
                                    width={"sm"}
                                    mainTitle='Ajout de la carte'
                                    mainBtnOptions={{
                                        icon: <MdOutlineAddShoppingCart size={15} />,
                                        useIcon: true,
                                    }}
                                >
                                    <div className=''>
                                        <BasketCard card={item} />
                                    </div>
                                </DialogCustom>
                            </div>
                        </div>)}
                </div>
            </motion.div>
        </div>
    )
}

export default Market
function Select() {
    const [value_, setValue_] = useState('')
    const [data, setData] = useState([
        {
            id: 1,
            value: "Poules cuites"
        },

        {
            id: 2,
            value: "Poules not cuites"
        },
        {
            id: 3,
            value: "Poulets fumés"
        },
    ])

    return (
        <div>
            <select className='py-1 px-1 border border-[#5d0000] rounded-xl px-2 focus:border-none bg-[#f8f4eb]' onChange={(e: any) => setValue_(e.target.value)}>
                <option value={value_} >Filter </option>
                {data.map((item) => <option value={item.id}>{item.value}</option>)}
            </select>
        </div>
    )
}
