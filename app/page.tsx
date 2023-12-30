import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center h-3/4 bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Hello, I&apos;m <span className="text-blue">Winbert.</span>
          </h1>
          <p className="text-xl sm:text-2xl mt-4">
            I&apos;m a full stack web developer.
          </p>
          <button className="mt-8 px-6 py-2 border rounded-md border-blue text-blue hover:bg-blue hover:text-white transition-colors duration-300">
            VIEW MY WORK
          </button>
        </div>
      </div>
    </div>
  );
}
