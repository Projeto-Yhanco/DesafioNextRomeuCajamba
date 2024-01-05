import Image from "next/image";
import contentImg from '../../../../assets/image 12.svg';

export function ContainerAbout(){
    return(
        <div className="">
            <Image src={contentImg} alt="Conteúdo em vídeo" className="" />
        </div>
    )
}