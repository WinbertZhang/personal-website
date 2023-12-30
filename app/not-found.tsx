import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <h2 className="text-4xl font-bold mb-4 text-blue">Page Not Found</h2>
      <p className="text-lg text-white mb-4">
        Could not find the page you were looking for!
      </p>
      <Link href="/" className="text-white hover:underline hover:text-blue">
        Return Home
      </Link>
    </div>
  );
}
