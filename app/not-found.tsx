import Link from "next/link";
import Image from "next/image";

export default function Custom500() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="rounded-full"
          src="/pfp.webp"
          alt="kinzoku profile picture"
          width={128}
          height={128}
          priority
        />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">oopsie</h1>
          <h2 className="text-sm">page not found</h2>
        </div>
        <ul className="list-inside text-base text-center space-y-2 sm:text-left font-[family-name:var(--font-inter)]">
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
