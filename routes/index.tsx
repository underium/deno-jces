import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Javier Cáceres</title>
      </Head>
      <div class="p-4 bg-black-russian w-full h-screen flex justify-center items-center">
        <p class="text-french-gray font-sans uppercase text-xs">
          It's dangerous to go alone! Take&nbsp;
          <a
            class="underline"
            target="_blank"
            href="https://caceres.dev"
            rel="noreferrer"
          >
            this.
          </a>
        </p>
      </div>
    </>
  );
}
