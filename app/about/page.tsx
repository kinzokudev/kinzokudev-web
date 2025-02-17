import { Icon } from "@iconify/react";
import Link from "next/link";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl ">About Me</h1>
          <ul className="flex flex-row space-x-2 items-center text-base text-center font-[family-name:var(--font-inter)]">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3 text-center">
          <h2 className="text-2xl mb-2 underline underline-offset-8">Intro</h2>
          <p className="text-balance">
            Hey! I'm Kira, also known as Kinzoku on the interwebs, and I'm a 16
            year old transfem nerd interested in software development and server
            administration, as well as an avid gamer.
          </p>
        </div>

        <div className="space-y-3 text-center">
          <h2 className="text-2xl mb-2 underline underline-offset-8">
            Nerd Shit
          </h2>
          <p className="text-balance">
            On the nerd side of things, I dabble in JavaScript/TypeScript, Nix,
            Rust, and some other languages. I also enjoy tinkering with my Linux
            machines and messing around with my NixOS configuration on my
            desktop.
          </p>
        </div>

        <div className="space-y-3 text-center">
          <h2 className="text-2xl mb-2 underline underline-offset-8">
            Gamer Shit
          </h2>
          <p className="text-balance">
            In terms of games, my favorites are ULTRAKILL, The Binding of Isaac,
            Terraria, Hollow Knight, Celeste, Dead Cells, Satisfactory,
            Helldivers 2, Devil May Cry, and Minecraft as well as many others.
          </p>
          <p className="text-balance">
            I'm mainly a fan of indie games, with Hollow Knight, Dead Cells and
            ULTRAKILL being my favorites, but I'm also a huge fan of Helldivers
            2 which you could argue is a AAA game (Pretty much the only one I
            enjoy. Most games made by AAA studios are kinda balls in my
            opinion).
          </p>
        </div>

        <div className="space-y-3 text-center">
          <h2 className="text-2xl mb-2 underline underline-offset-8">
            Gay Shit
          </h2>
          <p className="text-balance">
            For those who care, I am transgender, identify as female, and prefer
            she/they pronouns. I'm also a lesbian (taken).
          </p>
          <p className="text-balance">
            If you have a problem with any of this, feel free to close this tab
            and go about your day :) Otherwise, I do appreciate any and all
            support.
          </p>
        </div>

        <div className="space-y-3 text-center">
          <h2 className="text-2xl mb-2 underline underline-offset-8">
            Contacts n' Shit
          </h2>
          <p className="text-balance">
            Here are some links for contacts, social media, etc.
          </p>
          <ul className="flex flex-col items-center">
            <li className="flex flex-row items-center">
              <Icon icon="ic:baseline-discord" width={24} height={24} />
              <span className="ml-1.5">Discord: kinzokudev</span>
            </li>
            <li className="flex flex-row items-center">
              <Icon icon="mdi:github" width={24} height={24} />
              <span className="ml-1.5">GitHub: kinzokudev</span>
            </li>
            <li className="flex flex-row items-center">
              <Icon icon="mdi:steam" width={24} height={24} />
              <span className="ml-1.5">Steam: kinzokudev</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
