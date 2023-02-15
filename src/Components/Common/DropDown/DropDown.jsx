import { Link } from 'react-router-dom'

import { IoIosArrowDown } from "react-icons/io";
import DropDownMenu from './DropDownMenu';

import { navbarMenu } from '../../../Constants/NavbarMenu';

const DropDown = () => {
    return (
        <ul className='flex items-center justify-center gap-x-5'>
            {navbarMenu.map(item => (
                <li className='relative group' key={item.id}>
                    <Link className='flex items-center gap-x-2 transition-colors delay-100 ease-linear group hover:text-[#52ac66]'>
                        {item.name}
                        <IoIosArrowDown className='transition-transform delay-100 ease-linear group-hover:rotate-180'/>
                    </Link>
                    <DropDownMenu subMenu={item.subMenu}/>
                </li>
            ))}
        </ul>
    )
}

export default DropDown