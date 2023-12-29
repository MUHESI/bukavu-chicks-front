import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useNavigate } from 'react-router-dom';


interface ILinks {
    icon: any,
    label: string,
    link: string
}
interface IPropsNavbarMenuList {
    mainTitle: string;
    links: ILinks[]
    isTopOfPage?: boolean,
    onClick?: () => void
}

function NavbarMenuItems({
    mainTitle,
    links,
    onClick
}: IPropsNavbarMenuList) {
    const navigate = useNavigate()

    return (
        <NavigationMenu className=' w-[95%]'>
            <NavigationMenuList className=''>
                <NavigationMenuItem className='w-full'>
                    <NavigationMenuTrigger className={` font-bold text-white`} >{mainTitle}</NavigationMenuTrigger>
                    <NavigationMenuContent className='z-1000 bg-white text-primary-100 min-w-[298px] md:min-w-[200px]   rounded-md px-2 py-2    rounded-md '>
                        {links.map((item: ILinks, key: number) => <NavigationMenuLink onClick={() => {
                            navigate(`/${item.link}`)
                            if (onClick) return onClick()
                        }} key={key} className='block font-bold cursor-pointer py-2 transition hover:bg-secondary-500  hover:text-white px-1 rounded'>{item.label}</NavigationMenuLink>)}
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
export default NavbarMenuItems
