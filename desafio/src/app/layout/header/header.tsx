import Image from "next/image"
import logo from '../../../../public/Group 1911.svg';

export function Header(){
    return(
        <header className="bg-bgcol">
            <Image src={logo} alt="yhanko logo" className=""/>
        </header>
    )
}