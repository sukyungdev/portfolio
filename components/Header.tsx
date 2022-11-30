export default function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto p-5 flex flex-row items-center">
          <a className="flex flex-1 font-medium items-center text-gray-900 mb-0 cursor-pointer">
            <span className="text-lg sm:text-xl">Sukyungdev</span>
          </a>
          <nav className="md:ml-auto flex items-center text-sm sm:text-base justify-center ">
            <a className="mr-5 hover:text-gray-900 cursor-pointer">About Me</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">이력서</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-0">
            Button
          </button>
        </div>
      </header>
    </div>
  );
}
