import Link from "next/link";

export default function Cabecalho(){
    return (
        <header>
            <nav>
                <div >

                    
                   <div>
                        <ul>
                            <li>
                                <Link href="#home">Home</Link>
                            </li>
                            <li>
                                <Link href="#sobremim">Sobre Mim</Link>
                            </li>
                            <li>
                                <Link href="#skills">Skills</Link>
                            </li>
                            <li>
                                <Link href="#projetos">Projetos</Link>
                            </li>
                            <li>
                                <Link href="#contato">Contato</Link>
                            </li>
                            
                        </ul>
                   </div>
                </div>


            </nav>

        </header>
    )
}