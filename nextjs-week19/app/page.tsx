import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-5 text-lg">
      <h1 className="text-4xl">Todo application baby!!</h1>

      <Link href="/signup" className="bg-white rounded-xl text-black py-2 px-4">Signup</Link>
      <Link href="/signin" className="bg-white rounded-xl text-black py-2 px-4">Signin</Link>
    </div>
  );
}
