import Link from "next/link";

export default function Signup() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-5 text-lg">
      <h1>Signup Page lets go</h1>

    <Link href="/" className="bg-white rounded-xl text-black py-2 px-4">Go Back</Link>
    <Link href="/signin" className="bg-white rounded-xl text-black py-2 px-4">Sign</Link>
    </div>
  );
}
