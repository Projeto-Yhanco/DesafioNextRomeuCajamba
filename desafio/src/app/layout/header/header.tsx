import Image from "next/image"
import logo from '../../../assets/image 12.svg';

export function Header(){
    return(
        <header className="">
            <Image src={logo} alt="yhanko logo" className=""/>
        </header>
    )
}