import Link from 'next/link';
import Image from 'next/image';
import DarkModeButton from './DarkModeButton';

export default function Header() {
  return (
    <div>
      <header className="shadow dark:shadow-neutral-600">
        <div className="container mx-auto p-5 flex flex-row items-center">
          <div className="flex flex-grow">
            <Link href={'/'} className="m-0 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-yellow-400 hover:text-sky-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <nav className="flex items-center text-sm sm:text-base justify-center ">
            <Link href="/" className="mr-5">
              Home
            </Link>
            <Link href="/aboutMe" className="mr-5">
              AboutMe
            </Link>
            <Link href="/" className="mr-5">
              이력서
            </Link>
          </nav>
          <DarkModeButton />
        </div>
      </header>
    </div>
  );
}
