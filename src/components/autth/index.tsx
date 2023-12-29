import React, { useState } from 'react'
import Register from './register';
import Login from './login';
import ButtonCustom from '../core/buttonCustom';
import ImageCustom from '../core/imageCustom';

export type ScreenType = "LOGIN" | "REGISTER"
function Auth() {
    const [currentScreen, setCurrentScreen] = useState<ScreenType>("LOGIN");
    return (
        <div>
            {currentScreen === "LOGIN" ? <Login handleScreen={(val) => setCurrentScreen(val)} /> : <Register handleScreen={(val) => setCurrentScreen(val)} />}
        </div>
    )
}
export default Auth

function BtnAuth({ onClick, label, loadingStatus }: { onClick: () => void, label: string, loadingStatus?: boolean }) {
    return <ButtonCustom
        onClick={onClick}
        label={label}
        statusLoading={loadingStatus || false}
        className="rounded-full bg-secondary-100 border text-white border-secondary-100 transition hover:text-secondary-100 hover:bg-white"
    />
}
function ShowImage({ image }: { image: string }) {
    return <ImageCustom src={image} className=' w-[35px] shadow rounded-full p-1 hover:shadow-xl transition duration-300 cursor-pointer' alt='...' />
}
export { BtnAuth, ShowImage }
