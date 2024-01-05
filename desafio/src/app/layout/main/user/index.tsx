import Image from "next/image"
import osvaldo from '../../../../assets/Osvaldo.svg';
import romeu from '../../../../assets/Romeu.svg';
import nicolau from '../../../../assets/Milvaneo.svg';
import loureco from '../../../../assets/Loureco.svg';

export function UserContainer(){
    return(
        <div className="">
            <div className="">
                <Image src={osvaldo} alt="" className="" />
                <div className="">
                    <strong>Osvaldo Pedro</strong>
                    <span>Backend Developer</span>
                </div>
            </div>

            <div className="">
                 <Image src={romeu} alt="" className="" />
                <div className="">
                    <strong>Romeu Cajamba</strong>
                    <span>Backend Developer</span>
                </div>
            </div>

            <div className="">
                 <Image src={nicolau} alt="" className="" />
                <div className="">
                    <strong>Nicolau Noberto</strong>
                    <span>Marketing Digital</span>
                </div>
            </div>

            <div className="">
                <Image src={loureco} alt="" className="" />
                <div className="">
                    <strong>Lourenço Cardoso</strong>
                    <span>Fron-End Developer</span>
                </div>
            </div>
        </div>
    )
}