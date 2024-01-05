import Image from "next/image"
import logo from '../../../../public/Group 1911.svg';

export function Header(){
    return(
        <header className="w-screen">
            <Image src={logo} alt="yhanko logo" className="w-[400px] h-[400px] ml-[440px]"/>
            <div className="bg-[#693B93] w-[958px] h-[1px] ml-[168px] border-[1px]] -mt-36"></div>
        </header>
    )
}