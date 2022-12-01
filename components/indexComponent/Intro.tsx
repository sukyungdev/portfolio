import Animation from './Animation';

export default function Intro() {
  return (
    <div className="text-center lg:w-2/3 w-full">
      <div className="hidden sm:block sm:w-full">
        <Animation />
      </div>
      <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">
        안녕하세요. sukyungdev입니다.
      </h1>
      <p className="mb-8 leading-relaxed">안녕하세요. sukyungdev입니다.</p>
      <div className="flex justify-center">
        <a href="#">
          <span className="hover:text-indigo-600">Github</span>
        </a>
        <a href="#">
          <span className="hover:text-indigo-600">Github</span>
        </a>
        <a href="#">
          <span className="hover:text-indigo-600">Github</span>
        </a>
      </div>
    </div>
  );
}
