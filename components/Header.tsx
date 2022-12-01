import Link from 'next/link';
import DarkModeButton from './DarkModeButton';

export default function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto p-5 flex flex-row items-center">
          <div className="flex flex-grow">
            <Link href={'/'} className="font-medium text-gray-900 mb-0 text-lg sm:text-xl">
              Sukyungdev
            </Link>
          </div>
          <nav className="md:ml-auto flex items-center text-sm sm:text-base justify-center ">
            <Link href="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href="/aboutMe" className="mr-5 hover:text-gray-900">
              AboutMe
            </Link>
            <Link href="/" className='className="mr-5 hover:text-gray-900"'>
              이력서
            </Link>
          </nav>
          <DarkModeButton />
        </div>
      </header>
    </div>
  );
}
