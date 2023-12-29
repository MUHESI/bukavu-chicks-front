import React from 'react'
import { dataCommands } from './data'
import { MdDelete } from "react-icons/md";
import Auth from '@/components/autth';
import DialogCustom from '@/components/core/dialogCustom';

function ListCommand() {
    return (
        <div className="p-5  py-10 md:pb-0">
            <h2 className='font-bold text-xl text mb-4'>Commande</h2>
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
                    <div className='flex justify-end'>
                        <DialogCustom
                            hideHeader={true}
                            mainTitle=''
                            width="sm"
                            mainBtnOptions={
                                {
                                    classNameBtn: "bg-secondary-100 p-1 px-5 rounded-full text-white ",
                                    btnText: "Valider",
                                    useBtn: true,
                                }
                            }
                        >
                            <Auth />
                        </DialogCustom>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ListCommand