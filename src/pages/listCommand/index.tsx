import React from 'react'
import { dataCommands } from './data'
import { MdDelete } from "react-icons/md";

function ListCommand() {
    return (
        <div className="p-5  py-10 md:pb-0">
            <h2 className='font-bold text-2xl text mb-4'>Commande</h2>
            <div>
                <main className='mt-15'>
                    {dataCommands.products.map((item, key) =>
                        <div key={key} className='flex justify-between items-center gap-5  border-b pb-2 '>
                            <img alt={"..."} src={item.img} className=' cover w-[80px]' />
                            <div className='flex gap-4'>
                                <h5>{item.name}</h5>
                                <h5 className='font-bold'>{item.tot}$ </h5>
                            </div>
                            <div className='cursor-pointer hover:font-bold transition'>
                                <MdDelete size={20} />
                            </div>
                        </div>)}
                    <strong className='block text-right my-2'> Total:{dataCommands.total}$ </strong>
                    <div className='text-right'>
                        <button className=' bg-secondary-100 p-1 px-5 rounded-full text-white transition hover:text-secondary-100 hover:bg-white border border-transparent hover:border-secondary-100'>Valider</button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ListCommand