import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Link href='/home'> Home </Link>
    </div>
  );
}
