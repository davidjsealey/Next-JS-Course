import Head from "next/head";
import Link from "next/link";

const errorPage = () => {
  return (
    <div>
      <Head>
        <title>My Blog | 404</title>
        <meta name="description" content="404 page" />
      </Head>
      <h1>404. Sorry, this page was not found.</h1>
      <p>
        Return to the{" "}
        <Link href="/">
          <a>homepage.</a>
        </Link>
      </p>
    </div>
  );
};

export default errorPage;
