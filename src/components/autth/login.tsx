import React, { useState } from 'react'
import { FaEyeSlash } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md';
import { BiShow } from 'react-icons/bi';
import picture from '@/assets/viandeCuiteA.png'
import auth_facebookImg from '@/assets/auth_facebook.png'
import auth_GoogleImg from '@/assets/auth_Google.png'
import auth_tweetimg from '@/assets/auth_tweet.png'
import { MdAlternateEmail } from "react-icons/md";
import { BtnAuth, ScreenType, ShowImage } from '.';
import { InputAuth } from '../core/InputsCustom';

function Login({ handleScreen }: {
    handleScreen: (val: ScreenType) => void
}) {
    const [formLogin, setFormLogin] = useState<any>({
        email: '',
        pswd: ''
    });
    const [showPswd, setShowPswd] = useState(false);
    return (
        <div>
            <section>
                <div className="text-center flex justify-center">
                    <img
                        src={picture}
                        alt="logo-bukavu chicks"
                        className=" object-cover"
                        style={{ height: "70px" }}
                    />
                </div>

                <h2 className='text-center font-bold text-xl'>Connexion</h2>
                <p className='text-center text-sm text-slate-400'>Veuillez saisir vos identifiants pour vous connecter !</p>
                <div className='w-[90%] md:w-[55%] my-2 mx-auto'>
                    <div className="bg-white border border-secondary-100 my-5  p-2 flex items-center mb-3 rounded-lg">
                        <MdAlternateEmail className="text-gray-400 m-1 text-sm" />
                        <InputAuth
                            className='bg-white'
                            data-testid="emailInput"
                            value={""}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                console.clear()
                            }
                            type="email"
                            pl="Ton addresse email"
                        />
                    </div>
                    <div className="my-4 bg-white border border-secondary-100 p-1 py-2 flex items-center mb-3 rounded-lg">
                        <MdLockOutline className="text-gray-400 text-sm mr-2" />
                        <InputAuth
                            className='bg-white'
                            data-testid="passwordInput"
                            value={formLogin.pswd}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setFormLogin({
                                    ...formLogin,
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
                    <div>
                        <span className='text-slate-400 text-sm cursor-pointer hover:underline transition'>
                            Mot de passé ?
                        </span>
                    </div>

                    <div className="my-4 md:mt-1 flex justify-center md:justify-end">
                        <BtnAuth
                            label='Se connecter'
                            onClick={() => console.clear()}
                        />
                    </div>
                    <div>
                        <span className='text-slate-400 text-sm'>Besoin d'un compte ? <strong
                            onClick={() => handleScreen("REGISTER")}
                            className='cursor-pointer hover:underline transition hover:text-secondary-100'>Créer un compte </strong> </span>
                    </div>
                    <div className='my-2'>
                        <span className='text-slate-400 text-sm'>Ou se connnecter avec</span>
                        <div className='flex justify-center gap-5 my-2'>
                            <ShowImage image={auth_GoogleImg} />
                            <ShowImage image={auth_facebookImg} />
                            <ShowImage image={auth_tweetimg} />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
