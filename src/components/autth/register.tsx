import React, { useState } from 'react'
import picture from '@/assets/viandeCuiteA.png'
import { SiNamebase } from "react-icons/si";
import { InputAuth } from '@/components/core/Inputs';
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";
import { BtnAuth, ScreenType } from '.';
import { BiShow } from 'react-icons/bi';
import { FaEyeSlash } from 'react-icons/fa';

function Register({ handleScreen }: {
    handleScreen: (val: ScreenType) => void
}) {
    const [formRegister, setFormRegister] = useState<any>({
        email: '',
        pswd: ''
    });
    const [showPswd, setShowPswd] = useState(false);

    return (
        <div className=''>
            <div className="text-center flex justify-center">
                <img
                    src={picture}
                    alt="logo-bukavu chicks"
                    className=" object-cover"
                    style={{ height: "70px" }}
                />
            </div>
            <h2 className='text-center font-bold text-xl'>Créer un compte</h2>
            <p className='text-center text-sm text-slate-400'>
                Veuillez entrer les informations valides pour créer un compte!
            </p>
            <div className='w-[90%] md:w-[55%] my-2 mx-auto'>
                <div className='my-2'>
                    <label className='text-slate-500'>Nom complets</label>
                    <div className="bg-white border border-secondary-100 p-2 flex items-center mb-3 rounded-lg">
                        <SiNamebase className="text-gray-400 m-1 text-sm" />
                        <InputAuth
                            className='bg-white'
                            data-testid="emailInput"
                            value={""}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                console.clear()
                            }
                            type="text"
                            pl="Entrer votre nom complet"
                        />
                    </div>
                </div>
                <div className='my-2'>
                    <label className='text-slate-500'>Addresse mail</label>
                    <div className="bg-white border border-secondary-100 p-2 flex items-center mb-3 rounded-lg">
                        <MdAlternateEmail className="text-gray-400 m-1 text-sm" />
                        <InputAuth
                            className='bg-white'
                            value={""}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.clear()}
                            type="text"
                            pl="Entrer l'adresse email"
                        />
                    </div>
                </div>
                <div className='my-2'>
                    <label className='text-slate-500'>Mot de passe</label>
                    <div className="bg-white border border-secondary-100 p-1 py-2 flex items-center mb-3 rounded-lg">
                        <MdLockOutline className="text-gray-400 text-sm mr-2" />
                        <InputAuth
                            className='bg-white'
                            data-testid="passwordInput"
                            value={formRegister.pswd}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setFormRegister({
                                    ...formRegister,
                                    pswd: e.target.value
                                })
                            }
                            type={`${showPswd ? "text" : "password"}`}
                            pl="Ton mot de passe"
                        />
                        <span
                            data-testid="eye-icon"
                            className="text-gray-400  text-sm cursor-pointer"
                            onClick={() => setShowPswd(!showPswd)}
                        >
                            {showPswd ? <BiShow /> : <FaEyeSlash />}
                        </span>
                    </div>
                </div>
                <div className='my-2'>
                    <label className='text-slate-500'>Confirmer le mot de passe</label>
                    <div className="bg-white border border-secondary-100 p-1 py-2 flex items-center mb-3 rounded-lg">
                        <MdLockOutline className="text-gray-400 text-sm mr-2" />
                        <InputAuth
                            className='bg-white'
                            data-testid="passwordInput"
                            value={formRegister.pswd}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setFormRegister({
                                    ...formRegister,
                                    pswd: e.target.value
                                })
                            }
                            type={`${showPswd ? "text" : "password"}`}
                            pl="Ton mot de passe"
                        />
                        <span
                            data-testid="eye-icon"
                            className="text-gray-400  text-sm cursor-pointer"
                            onClick={() => setShowPswd(!showPswd)}
                        >
                            {showPswd ? <BiShow /> : <FaEyeSlash />}
                        </span>
                    </div>
                </div>
                <div>
                    <span className='text-slate-400 text-sm'>Avez-vous deja un compte ? <strong className=' text-center cursor-pointer hover:underline transition hover:text-secondary-100'
                        onClick={() => handleScreen("LOGIN")}
                    >Se connecter </strong> </span>
                </div>
                <div className="mt-4 md:mt-1 flex justify-center md:justify-end">
                    <BtnAuth
                        label="Créer un compte"
                        onClick={() => console.clear()}
                    />
                </div>
            </div>
        </div>
    )
}

export default Register
