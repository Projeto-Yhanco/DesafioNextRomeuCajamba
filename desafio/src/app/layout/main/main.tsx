import Link from "next/link";
import { useRouter } from "next/router";
import {UserContainer} from './user/index';
import {ContainerAbout} from './about/index';
import {History} from './history/index';

export function Main(){
    
    return(
        <main className="h-[400px]">
            <ul className=" mt-[30px] ml-[168px] flex flex-row space-x-4">

                <li className="w-[145px] h-[45px] rounded-[7px] bg-bcol text-center text-white text-[18px] font-semibold pt-2  hover:bg-btclick hover:cursor-pointer">
                    <Link href="/[slug]" as="/user">User</Link>
                </li>

                <li className="w-[145px] h-[45px] rounded-[7px] bg-bcol text-center  text-white text-[18px] font-semibold pt-2  hover:bg-btclick hover:cursor-pointer">
                    <Link href="/about" as="/about">About Yhanko</Link>
                </li>

                <li className="w-[145px] h-[45px] rounded-[7px] bg-bcol text-center text-white text-[18px] font-semibold pt-2  hover:bg-btclick hover:cursor-pointer">
                    <Link href="/[slug]" as="/history">History</Link>
                 </li>
            </ul>
        </main>
    )
}