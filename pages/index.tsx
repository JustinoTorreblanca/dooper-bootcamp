import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dooper</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/logo-dooper.png"
          key="icon16"
        />
      </Head>

      <main>
        <h1>Welcome to:</h1>
        <Image
          src="/assets/logo-dooper.png"
          alt="dooper"
          width="200px"
          height="100px"
        />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
