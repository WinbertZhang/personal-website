import Link from "next/link";
import siteMetadata from "@/data/siteMetadata";

export default function Footer() {
  return (
    <footer>
      <div className="mt-12 flex flex-col items-center">
        <div className="mb-3 flex space-x-4"></div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Built with Nextjs and Tailwind
          </Link>
        </div>
      </div>
    </footer>
  );
}
