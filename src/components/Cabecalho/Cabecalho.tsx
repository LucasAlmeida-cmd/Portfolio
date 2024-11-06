import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="flex justify-center p-4">
      <nav className="pt-5 pb-5 bg-gradient-to-r from-green-400 to-blue-700 text-center rounded-2xl max-w-5xl text-white w-full  sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
        <ul className="flex justify-center sm:text-base sm:justify-center md:text-lg md:justify-center  lg:text-lg xl:text-xl">
          <li className="ml-3 mr-3">
            <Link href="#home">Home</Link>  
          </li>
          <li className="ml-3 mr-3">
            <Link href="#sobremim">Sobre Mim</Link>
          </li>
          <li className="ml-3 mr-3">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="ml-3 mr-3">
            <Link href="#projetos">Projetos</Link>
          </li>
          <li className="ml-3 mr-3">
            <Link href="#contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
