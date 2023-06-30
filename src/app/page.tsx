import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Anim from "@/components/Animation";
export default function Home() {
  const { userId } = auth();
  return (
    <main className="flex min-h-screen bg-gray-800 flex-col px-8 pt-32 ">
      <div className="max-w-7xl border-b-4 flex flex-col md:flex-row justify-center items-center  border-t-8 border-white py-8 pr-4 text-4xl font-medium sm:text-6xl md:text-7xl lg:text-8xl text-white shadow-md shadow-gray-400 p-4 hover:shadow-sm ease-in-out duration-100">
        <Anim />
        <h1 className="text-center">
          Your Next Second <span className="text-rose-500">Brain</span>
        </h1>
      </div>
      <div className="mt-8 flex gap-4 justify-center items-center">
        {!userId ? (
          <>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/sign-up"
            >
              Sign-up
            </Link>
            <Link
              className={buttonVariants({ variant: "default" })}
              href="/sign-in"
            >
              Sign-in
            </Link>
          </>
        ) : (
          <Link className={buttonVariants({ variant: "default" })} href="/application">
            Go to App
          </Link>
        )}
      </div>
    </main>
  );
}
