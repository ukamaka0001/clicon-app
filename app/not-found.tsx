import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import SimpleFooter from "@/components/footer/SimpleFooter";
import BackButton from "@/components/not-found/BackButton";

import Image from "next/image";
import Link from "next/link";

import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <>
      <SimpleNavbar />

      <main className="flex min-h-[calc(100vh-180px)] items-center justify-center bg-white px-6 py-20">

        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Image
              src="/images/error.png"
              alt="404 Page Not Found"
              width={460}
              height={340}
              priority
              className="w-full max-w-md object-contain"
            />
          </div>

          <h1 className="mt-10 text-4xl font-bold text-gray-900 md:text-5xl">
            404 - Page Not Found
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Sorry, the page you are looking for doesn't exist or may have been
            moved. Please check the URL or return to the homepage.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <BackButton />

            <Link
              href="/"
              className="flex items-center justify-center gap-3 rounded-lg border-2 border-orange-500 px-8 py-4 font-semibold text-orange-500 transition duration-300 hover:bg-orange-500 hover:text-white"
            >
              <FaHome />
              Back to Home
            </Link>

          </div>

        </div>

      </main>

      <SimpleFooter />
    </>
  );
}