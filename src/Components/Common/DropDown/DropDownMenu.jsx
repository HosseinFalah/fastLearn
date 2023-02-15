import { Link } from "react-router-dom";

const DropDownMenu = ({subMenu}) => {
    return (
        <ul className="absolute w-52 mt-2 bg-[#fff] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-100 rounded-md border-t-2 border-emerald-500 p-2 right-0 shadow-md">
            <li className="p-1">
                <Link className="block rounded-md px-3 py-2 transition-colors delay-100 ease-linear hover:bg-[#52ac661f] hover:text-[#52ac66]">
                    {subMenu[0]}
                </Link>
            </li>
            <li className="p-1">
                <Link className="block rounded-md px-3 py-2 transition-colors delay-100 ease-linear hover:bg-[#52ac661f] hover:text-[#52ac66]">
                    {subMenu[1]}
                </Link>
            </li>
            <li className="p-1">
                <Link className="block rounded-md px-3 py-2 transition-colors delay-100 ease-linear hover:bg-[#52ac661f] hover:text-[#52ac66]">
                    {subMenu[2]}
                </Link>
            </li>
        </ul>
    )
}

export default DropDownMenu