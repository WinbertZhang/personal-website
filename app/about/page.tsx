import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <div className="mt-12 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-12 flex md:flex-row flex-col-reverse items-center justify-between">
        <div className="flex-1 order-1">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Hello, I&apos;m <span className="text-blue-600">Winbert</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg sm:text-xl">
            I&apos;m a full Stack Software Engineer passionate about building
            full stack software applications. Currently studying at UCSB and
            exploring the latest in machine learning!
          </p>
          <p className="mt-4 text-gray-700 text-lg sm:text-xl">
            In my free time I enjoy listening to EDM, hiking, playing board
            games, and watching anime.
          </p>
          <p className="mt-4 text-gray-700 text-lg sm:text-xl">
            Contact me with the links below!
          </p>
          <div className="flex flex-row justify-center md:justify-start gap-4 mt-6">
            <Link
              href="http://linkedin.com/in/winbert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline hover:text-blue flex items-center"
            >
              <FaLinkedinIn className="mr-2" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/WinbertZhang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline hover:text-blue flex items-center"
            >
              <FaGithub className="mr-2" />
              GitHub
            </Link>
            <Link
              href="mailto:winbertzhang@gmail.com"
              className="text-blue-600 hover:underline hover:text-blue flex items-center"
            >
              <FaEnvelope className="mr-2" />
              Email
            </Link>
          </div>
        </div>
        <div className="flex-1 order-2">
          <div className="w-48 h-48 md:w-64 md:h-64 relative ml-auto m-4">
            <Image
              src="/profile.jpg"
              alt="Profile Image of Winbert"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
