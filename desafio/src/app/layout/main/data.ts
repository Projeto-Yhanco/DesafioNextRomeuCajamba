import Osvaldo from '../../../assets/Osvaldo.svg';
import Romeu from '../../../assets/Romeu.svg';
import Nicolau from '../../../assets/Milvaneo.svg';
import Lourenco from '../../../assets/Loureco.svg';



export type User = {
    name: string;
    task: string;
    img: string;
};

export type dataType = {
    Users: User[],
    about: string,
    video: string
}


export const dataYhanko: dataType = {
    Users: [
        {
            name: 'Osvaldo Pedro',
            task: 'Backend Developer',
            img:  Osvaldo
        },
        {
            name: 'Romeu Cajamba',
            task: 'Backend Developer',
            img: Romeu
        },
        {
            name: 'Nicolau Noberto',
            task: 'Marketing',
            img:  Nicolau
        },
        {
            name: 'Lorrys Code',
            task: 'Fron-End Developer',
            img:  Lourenco
        }
    ],
    about: `
    A Yhanko e uma que tem como objetivo criação de projetos
    com ferramentas modernas, trazendo uma melhor experine
    cia pora o usuario, a Yhanko tem em sua constituição dev’s 
    com habilidades unicas e inovadoras, o seu papel na aréa e
    comercial  é de expandir, inovar e pontencializar qualquer 
    outro projeto, do pensamento para o template ate ao codigo
    ate ao codigp, Yhanko é o fututo.
    `,
    video: '../../../assets/agricultura.mp4'
}